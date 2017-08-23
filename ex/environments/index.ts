import * as env from './environment'
import * as envProd from './environment.prod'
declare let __DEBUG__: any
const environment: any = __DEBUG__ ? env.environment : envProd.environment

export {
  environment,
}
