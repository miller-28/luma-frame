# LumaFrame

A floating desktop photo frame for local folders.

## Package

- Package/repo name: `luma-frame`
- Tauri identifier: `com.miller28.luma-frame`
- Window title: `LumaFrame`

## Build a Windows EXE

Install the project dependencies first:

```powershell
npm install
```

Build the Tauri desktop app:

```powershell
npm run tauri -- build
```

Tauri runs the frontend build automatically through `src-tauri/tauri.conf.json`, then compiles and bundles the Windows app.

The portable application executable is created here:

```text
src-tauri\target\release\luma-frame.exe
```

The bundled installer executable is created under:

```text
src-tauri\target\release\bundle\nsis\
```

For version `0.1.0`, the installer is usually named similar to:

```text
LumaFrame_0.1.0_x64-setup.exe
```

Use the `bundle\nsis` setup executable when you want a single EXE artifact to upload or share as an installer. Use `target\release\luma-frame.exe` when you want to run the compiled app directly on the same machine.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).
