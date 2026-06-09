# LumaFrame

A floating desktop photo frame for local folders.

## Development

Install dependencies:

```powershell
npm install
```

Run the full desktop development environment:

```powershell
npm run dev
```

This starts the Vite dev server at `http://localhost:1420` and launches the Tauri desktop app against that server.

Run only the frontend dev server:

```powershell
npm run start
```

Run the Tauri app separately when the frontend dev server is already running:

```powershell
npm run start-app
```

Create a frontend production bundle without packaging the desktop app:

```powershell
npm run build
```

Preview the frontend production bundle:

```powershell
npm run preview
```

## Production

Build the Tauri desktop app:

```powershell
npm run tauri -- build
```

Tauri runs the frontend build automatically through `src-tauri/tauri.conf.json`, then compiles and bundles the desktop app.

## EXE Artifacts

The portable Windows application executable is created here:

```text
src-tauri\target\release\luma-frame.exe
```

The bundled Windows installer executable is created under:

```text
src-tauri\target\release\bundle\nsis\
```

For version `0.1.0`, the installer is usually named similar to:

```text
LumaFrame_0.1.0_x64-setup.exe
```

Use the `bundle\nsis` setup executable when you want a single EXE artifact to upload or share as an installer. Use `target\release\luma-frame.exe` when you want to run the compiled app directly on the same machine.

## Package Details

- Package/repo name: `luma-frame`
- Tauri identifier: `com.miller28.luma-frame`
- Window title: `LumaFrame`

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer).
