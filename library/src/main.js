// main.ts only for development testing

import { workingWorker, brokenWorker } from './index'

/**
 * Both of these functions work when developing inside the library.
 */

workingWorker()
brokenWorker()