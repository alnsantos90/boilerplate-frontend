import { Agent } from 'elastic-apm-node';
import getConfig from 'next/config';
const { publicRuntimeConfig,serverRuntimeConfig } = getConfig();

export const apmInit = () => {
  let apmNode: Agent = require('elastic-apm-node')
  if(!apmNode.isStarted()){
    apmNode.start({
      serviceName: `${serverRuntimeConfig.ELASTIC_APM_SERVICE_NAME}`,
      serverUrl: `${publicRuntimeConfig.ELASTIC_APM_SERVER_URL}`,
      secretToken: `${serverRuntimeConfig.ELASTIC_APM_SECRET_TOKEN}`,
      environment: `${serverRuntimeConfig.ELASTIC_APM_ENVIRONMENT}`,
      verifyServerCert: false
    })
  }

  return apmNode
}