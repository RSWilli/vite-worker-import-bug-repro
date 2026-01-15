function WorkerWrapper(options) {
  return new Worker(
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    {
      name: options?.name
    }
  );
}
function brokenWorker() {
  const worker = new Worker(new URL(
    /* @vite-ignore */
    "" + new URL("assets/worker-DBPFjENN.js", import.meta.url).href,
    import.meta.url
  ), { type: "module" });
  worker.onmessage = (event) => {
    console.log("Message from working worker:", event.data);
  };
}
function workingWorker() {
  const worker = new WorkerWrapper();
  worker.onmessage = (event) => {
    console.log("Message from broken worker:", event.data);
  };
}
export {
  brokenWorker,
  workingWorker
};
