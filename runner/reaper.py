from enums import State
import threading
import errno

class Reaper:
    @staticmethod
    def reap(state, user_code, output_file, reason="", reap_grace_time=5):
        if reason is None:
            print("Reaping user code")
        else:
            print("Reaping user code ({})".format(reason))
        if state != State.running:
            print("Warning: told to stop code, but state is {}, not State.running!".format(state))
        try:
            user_code.terminate()
        except OSError as e:
            if e.errno == errno.ESRCH:  # No such process
                pass
            else:
                raise
        if user_code.poll() is None:
            butcher_thread = threading.Timer(reap_grace_time, Reaper.butcher, [user_code])
            butcher_thread.daemon = True
            butcher_thread.start()
            try:
                user_code.communicate()
            except Exception as e:
                print("death: Caught an error while killing user code, sod Python's I/O handling...")
                print("death: The error was: {}: {}".format(type(e), e))
            butcher_thread.cancel()
        if output_file is not None:
            try:
                output_file.write("\n==== END OF ROUND ====\n\n")
            except Exception:
                pass
            try:
                output_file.close()
            except Exception as e:
                print("death: Caught an error while closing user code's output.")
                print("death: The error was: {}: {}".format(type(e).__name__, e))

        print("Done reaping user code")
        return State.post_run
    
    @staticmethod
    def butcher(user_code):
        if user_code.poll() is None:
            print("Butchering user code")
            try:
                user_code.kill()
            except OSError as e:
                if e.errno == errno.ESRCH:  # No such process
                    pass
                else:
                    raise
            print("Done butchering user code")
