# cross-fade-server

Node.js server for the cross-fade project, written in TypeScript.

## Prerequisites

- **Node.js 20.6.0 or later** — check with `node -v`
- **npm** — included with Node

## First-time setup

1. Clone the repo and open a terminal in the project root:

   ```bash
   cd cross-fade
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   This installs TypeScript, ts-node, and the Node.js type definitions listed in `package.json`.

## Development

Start the dev server with file watching (restarts automatically when you save changes):

```bash
npm run dev
```

This runs `src/index.ts` directly via ts-node — no build step needed while developing.

## Production build

Compile TypeScript to JavaScript in the `dist/` folder:

```bash
npm run build
```

Run the compiled output:

```bash
node dist/index.js
```

## Project layout

```
cross-fade/
├── src/
│   ├── index.ts                        # Entry point
│   ├── route.ts                        # Route registration
│   ├── api/
│   │   └── placeholder/
│   │       ├── placeholder.route.ts    # HTTP handlers
│   │       ├── placeholder.service.ts  # Business logic
│   │       └── placeholder.repo.ts     # Data access
│   ├── pages/
│       └── placeholder/
│           ├── placeholder.html        # Page markup
│           ├── placeholder.js          # Page scripts
│           └── placeholder.css         # Page styles
├── dist/                               # Compiled output (created by npm run build)
├── package.json
└── tsconfig.json
```

**API modules** (`src/api/`) follow a layered structure: **route** (HTTP) → **service** (logic) → **repo** (data). Add a new API by creating a folder under `src/api/` with those three files.

**Pages** (`src/pages/`) hold front-end assets for individual screens. Each page gets its own folder with co-located `.html`, `.js`, and `.css` files — for example, `src/pages/placeholder/placeholder.html`.
