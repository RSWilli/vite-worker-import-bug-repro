import HelloWorldWorker from "./worker?worker"

export function urlImportWorker() {
    const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' })

    worker.onmessage = (event) => {
        console.log('Message from url import worker:', event.data)
    }
}

export function importWorker() {
    const worker = new HelloWorldWorker()

    worker.onmessage = (event) => {
        console.log('Message from ?worker import worker:', event.data)
    }
}
