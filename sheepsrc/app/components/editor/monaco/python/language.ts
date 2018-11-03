import { listen, MessageConnection } from "vscode-ws-jsonrpc";
import {
  MonacoLanguageClient,
  CloseAction,
  ErrorAction,
  MonacoServices,
  createConnection
} from "monaco-languageclient";
import * as monaco from "monaco-editor";
import ReconnectingWebSocket from "reconnecting-websocket";
import { tokens } from "./tokens";

monaco.languages.register({
  id: "python",
  extensions: [".py"],
  aliases: ["PYTHON", "python"]
});
// noinspection JSCheckFunctionSignatures
monaco.languages.setMonarchTokensProvider("python", tokens);

export default function registerPythonLanguage(
  monacoEditor: monaco.editor.IStandaloneCodeEditor
) {
  MonacoServices.install(monacoEditor);

  const url = `ws://${location.hostname}:5000/pyls`;
  const webSocket = createWebSocket(url);

  listen({
    webSocket,
    onConnection: connection => {
      const languageClient = createLanguageClient(connection);
      const disposable = languageClient.start();
      connection.onClose(() => disposable.dispose());
    }
  });
}

function createLanguageClient(
  connection: MessageConnection
): MonacoLanguageClient {
  return new MonacoLanguageClient({
    name: "Python Language Client",
    clientOptions: {
      documentSelector: ["python"],
      errorHandler: {
        error: () => ErrorAction.Continue,
        closed: () => CloseAction.DoNotRestart
      }
    },
    connectionProvider: {
      get: (errorHandler, closeHandler) => {
        return Promise.resolve(
          // @ts-ignore
          createConnection(connection, errorHandler, closeHandler)
        );
      }
    }
  });
}

function createWebSocket(url: string): WebSocket {
  const socketOptions = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 10000,
    maxRetries: Infinity,
    debug: false
  };
  // @ts-ignore
  return new ReconnectingWebSocket(url, undefined, socketOptions);
}
