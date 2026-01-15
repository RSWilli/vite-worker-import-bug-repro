import * as lib from 'library'
import * as alwaysbroken from 'library/alwaysbroken'

lib.urlImportWorker()
lib.importWorker()

alwaysbroken.urlImportWorker()
alwaysbroken.importWorker()