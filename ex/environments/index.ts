declare let __DEBUG__: any
declare let __CONFIG__: {
  version: string
}

import * as env from './environment'
import * as envProd from './environment.prod'

const staticEnv: any = __DEBUG__ ? env.environment : envProd.environment
const environment = Object.assign(staticEnv, __CONFIG__)

export {
  environment,
}
