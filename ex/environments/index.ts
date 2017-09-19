declare let __DEBUG__: any
declare let __CONFIG__: {
  version: string
  faas: 0,
}

import * as env from './environment'
import * as envProd from './environment.prod'

const staticEnv: any = __DEBUG__ ? env.environment : envProd.environment
const environment: any = Object.assign(staticEnv, __CONFIG__)

export {
  environment,
}
