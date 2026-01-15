import HelloWorldWorker from "./worker?worker"

export function brokenWorker() {
    const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' })

    worker.onmessage = (event) => {
        console.log('Message from working worker:', event.data)
    }
}

export function workingWorker() {
    const worker = new HelloWorldWorker()

    worker.onmessage = (event) => {
        console.log('Message from broken worker:', event.data)
    }
}