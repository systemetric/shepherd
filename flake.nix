{
  inputs = {
    naersk.url = "github:nix-community/naersk/master";
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
    fenix.url = "github:nix-community/fenix";
  };

  outputs =
    {
      self,
      nixpkgs,
      utils,
      naersk,
      fenix,
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        naersk' = pkgs.callPackage naersk { };
      in
      {
        packages = {
          default = naersk'.buildPackage {
            name = "shepherd";
            src = ./.;
          };

          cross-x86_64 =
            let
              rustToolchain =
                with fenix.packages.${system};
                combine [
                  minimal.cargo
                  minimal.rustc
                  targets.x86_64-unknown-linux-musl.latest.rust-std
                ];
            in
            (naersk.lib.${system}.override {
              cargo = rustToolchain;
              rustc = rustToolchain;
            }).buildPackage
              {
                name = "shepherd";
                src = ./.;

                CARGO_BUILD_TARGET = "x86_64-unknown-linux-musl";
                CARGO_TARGET_x86_64_UNKNOWN_LINUX_MUSL_LINKER =
                  let
                    inherit (pkgs.pkgsCross.gnu64.pkgsStatic.stdenv) cc;
                  in
                  "${cc}/bin/${cc.targetPrefix}cc";

                CC_x86_64_unknown_linux_musl =
                  let
                    cc = pkgs.pkgsCross.gnu64.pkgsStatic.stdenv.cc;
                  in
                  "${cc}/bin/${cc.targetPrefix}cc";
              };

          cross-aarch64 =
            let
              rustToolchain =
                with fenix.packages.${system};
                combine [
                  minimal.cargo
                  minimal.rustc
                  targets.aarch64-unknown-linux-musl.latest.rust-std
                ];
            in
            (naersk.lib.${system}.override {
              cargo = rustToolchain;
              rustc = rustToolchain;
            }).buildPackage
              {
                name = "shepherd";
                src = ./.;

                CARGO_BUILD_TARGET = "aarch64-unknown-linux-musl";
                CARGO_TARGET_AARCH64_UNKNOWN_LINUX_MUSL_LINKER =
                  let
                    inherit (pkgs.pkgsCross.aarch64-multiplatform.pkgsStatic.stdenv) cc;
                  in
                  "${cc}/bin/${cc.targetPrefix}cc";

                CC_aarch64_unknown_linux_musl =
                  let
                    cc = pkgs.pkgsCross.aarch64-multiplatform.pkgsStatic.stdenv.cc;
                  in
                  "${cc}/bin/${cc.targetPrefix}cc";
              };
        };

        devShells.default =
          with pkgs;
          mkShell {
            buildInputs = [
              cargo
              rustc
              rustfmt
              pre-commit
              rustPackages.clippy
              rust-analyzer
            ];
            RUST_SRC_PATH = rustPlatform.rustLibSrc;
          };
      }
    );
}
