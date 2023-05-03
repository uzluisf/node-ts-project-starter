# node-ts-project-starter

Minimal template for TypeScript-based Node projects.

## Usage

```
git clone --depth=1 --branch=master https://github.com/uzluisf/node-ts-project-starter.git <project-name>
cd <project-name>
rm -rf .git
npm install
```

## Commands

| Command  | Description |
|:---------|:------------|
| `build`     | Full build. |
| `start` | Run Node on `./dist/index.js`, which is the project's entry point. |
| `start:dev` | Run Node on `./dist/index.js` with Nodemon so the process restarts if it crashes. |
| `lint` | Runs ESLint on files under directory `./src`. |
| `lint:fix` | Fix linting errors (as described in `./.eslintrc.json`). |
| `test` | Run `jest`. |

## Structure

| Name | Description |
|:------|:-----------|
| `./dist/` | Directory that contains the distributable from your TypeScript build, which is the code you ship. |
| `./src/` | Directory that contains your TypeScript source that will be compiled to the `outDir`, i.e., `dist`. |
| `./src/main.ts` | Entry point to your script app. |
| `./package.json` | File that describes the project, and contains the NPM dependencies and build scripts. |
| `./tsconfig.json` | Configuration file for the TypeScript compiler, which dictates how the compiler behaves. |
| `./jest.config.ts` | Configuration file for the testing library Jest. |
| `./nodemon.json` | Configuration file for Nodemon. |
| `./node_modules/` | Directory that stores all your project's dependencies. It's created when you run `npm install`. |
| `./.eslintrc.json` | Configuration file for ESLint. |
| `./.eslintignore` | Config settings for paths to exclude from linting. |

## Dependencies

| Type     | Dependency | Explanation |
|:---------|:-----------|:------------|
| dependencies | | |
| || |
| devDependencies | `typescript` | TypeScript compiler and type checker. |
| | `@types/node` | Type definitions for Node APIs (e.g., `file`, `path`, etc.) |
| | `ts-node` | Execution TypeScript source files without transpilation step to JavaScript. Used by `nodemon`. |
| | `nodemon` | An utility for cold reloading during development.  |
| | `rimraf` | Cross-platform utility that acts like `rm -rf` in Linux. |
| | `eslint` | JS Linter. |
| | `@typescript-eslint/parser` | Parser to allow ESLint to lint TypeScript source code.|
| | `@typescript-eslint/eslint-plugin` | Tool that allows you to run ESLint on TS code. |
| | `jest` | JS testing framework. |
| | `@types/jest` | Types for Jest. |
| | `ts-jest` | Utility for using Jest in TS projects. |
