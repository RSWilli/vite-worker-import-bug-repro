// main.ts only for development testing

import * as lib from './index'
import * as alwaysbroken from './alwaysbroken/index'

/**
 * All of these functions work when developing inside the library.
 */

lib.urlImportWorker()
lib.importWorker()

alwaysbroken.urlImportWorker()
alwaysbroken.importWorker()