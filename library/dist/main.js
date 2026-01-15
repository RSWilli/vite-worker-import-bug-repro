function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    {
      name: options?.name
    }
  );
}
function urlImportWorker() {
  const worker = new Worker(new URL(
    /* @vite-ignore */
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    import.meta.url
  ), { type: "module" });
  worker.onmessage = (event) => {
    console.log("Message from url import worker:", event.data);
  };
}
function importWorker() {
  const worker = new WorkerWrapper();
  worker.onmessage = (event) => {
    console.log("Message from ?worker import worker:", event.data);
  };
}
export {
  importWorker,
  urlImportWorker
};
