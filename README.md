# Vite Bug reproduction

This repository reproduces a Bug with a WebWorker import in a library that uses realtive base paths. This only happens in dev mode and only when the dependencies are getting optimized into `node_modules/.vite/deps`.

This repository contains to projects:

* library: a simple vite library exposing a Hello World WebWorker
* application: the vite application that imports the library and calls the function exposed by the library

## Quick start:

```
cd application
npm i
npm run dev
```

## What's happening here?

The [built library](library/dist/my-library.es.js) uses the following snippet to import the Worker:

```js
const worker = new Worker(new URL(
    /* @vite-ignore */
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    import.meta.url
  ), { type: "module" });
```

Which is transpiled from:

```ts
const worker = new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' })
```

The `/* @vite-ignore */` is wrong there, because the application that imports the asset will search for it in `http://localhost:5173/node_modules/.vite/deps/assets/worker-C5kO0cPB.js`, where the assets aren't located because they aren't getting optimized into `node_modules/.vite/deps`.

## Workaround:

Import the worker in the library via:

```js
import HelloWorldWorker from "./worker?worker"
```

Which gets transpiled to:

```js
function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    {
      name: options?.name
    }
  );
}
```

(Note the lack of the `/* @vite-ignore */`)

## Additional Notes:

Building the application with `npm run build` works fine.