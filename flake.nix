{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    utils.url = "github:numtide/flake-utils";

    crane.url = "github:ipetkov/crane";

    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      utils,
      crane,
      rust-overlay,
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [ (import rust-overlay) ];
        };

        crane-default = crane.mkLib pkgs;
        crane-x86_64 = (crane.mkLib pkgs).overrideToolchain (
          p:
          p.rust-bin.stable.latest.default.override {
            targets = [ "x86_64-unknown-linux-musl" ];
          }
        );
        crane-aarch64 = (crane.mkLib pkgs).overrideToolchain (
          p:
          p.rust-bin.stable.latest.default.override {
            targets = [ "aarch64-unknown-linux-musl" ];
          }
        );
      in
      {
        packages = {
          default = crane-default.buildPackage {
            pname = "shepherd";
            src = crane-default.cleanCargoSource ./.;
            strictDeps = true;
          };

          cross-x86_64 = crane-x86_64.buildPackage {
            pname = "shepherd";
            src = crane-x86_64.cleanCargoSource ./.;
            strictDeps = true;
            doCheck = false;

            CARGO_BUILD_TARGET = "x86_64-unknown-linux-musl";
            CARGO_BUILD_RUSTFLAGS = "-C target-feature=+crt-static";
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

          cross-aarch64 = crane-aarch64.buildPackage {
            pname = "shepherd";
            src = crane-aarch64.cleanCargoSource ./.;
            strictDeps = true;
            doCheck = false;

            CARGO_BUILD_TARGET = "aarch64-unknown-linux-musl";
            CARGO_BUILD_RUSTFLAGS = "-C target-feature=+crt-static";
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
