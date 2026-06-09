# Codex Instructions - LumaFrame

LumaFrame is a React, Vite, TypeScript, and Tauri desktop app for a floating local photo frame. Apply these rules whenever you add, refactor, or review code in this repository.

## Code Quality & Design Principles

### SOLID Principles
- **Single Responsibility** - each class, module, component, hook, and function has one clear reason to change. UI components handle rendering and local state, services contain business logic and persistence, utilities provide pure helpers.
- **Open/Closed** - extend behavior through composition, hooks, or small adapters rather than modifying existing working code.
- **Liskov Substitution** - where abstractions are used, implementations should be interchangeable.
- **Interface Segregation** - keep service APIs focused; do not force consumers to depend on methods they do not use.
- **Dependency Inversion** - UI and higher-level modules depend on small service interfaces, not concrete Tauri or browser implementation details.

### Separation of Concerns
Strict layering: **React Components -> Services -> Utilities/Adapters**.

- Components in `src/react/components` should avoid direct filesystem or platform APIs.
- Services in `src/react/services` own persistence, settings, image discovery, and business workflows.
- Utilities in `src/react/utils` isolate reusable adapters for Tauri/browser behavior.
- Rust code in `src-tauri/src` should expose minimal commands and keep native behavior small and explicit.

### Code Smells & Readability
- Avoid god components, long methods, excessive branching and dead code.
- Prefer small, well-named functions and extract repeatable logic into services or utils.
- Keep async platform fallbacks explicit because browser preview and Tauri runtime have different capabilities.

### Naming Conventions
- Classes, React components, and TypeScript types: `PascalCase`
- Functions, hooks, methods, and local variables: `camelCase`
- TypeScript object properties, component props, persisted settings keys, and native-facing properties: `snake_case`
- React/DOM/library-owned attributes keep the casing required by the framework, such as `className`, `onMouseDown`, and `aria-label`
- Backward-compatible aliases may exist only at normalization boundaries for legacy settings; application code should use `snake_case`
- Constants: `SCREAMING_SNAKE_CASE`

### Design Patterns
- Use Adapter pattern for platform APIs (Tauri) to isolate native calls behind a small service surface.
- Export singleton service instances or focused service objects for shared state like settings, image discovery, and cache behavior.
- Prefer React composition and hooks for UI behavior rather than broad global state.

### JSDoc
- Public classes and methods should have short JSDoc comments describing purpose and parameters.

### Verification
- Run `npm run build` after TypeScript or React changes when practical.
- Run `npx tsc --noEmit` for quick type checks when a full build is unnecessary.
- For Rust/Tauri changes, run `cargo check` from `src-tauri` when practical.

Follow these rules. If a change would require broad renames or risky migration work, keep compatibility at the boundary and document the follow-up.
