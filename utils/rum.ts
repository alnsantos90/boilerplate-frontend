import { init as initApm } from '@elastic/apm-rum'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const apm = initApm({
  serviceName: `${publicRuntimeConfig.NEXT_PUBLIC_ELASTIC_SERVICE_NAME}`,
  serverUrl: `${publicRuntimeConfig.NEXT_PUBLIC_ELASTIC_SERVICE_URL}`,
  serviceVersion: `${publicRuntimeConfig.NEXT_PUBLIC_ELASTIC_SERVICE_VERSION}`,
  environment: `${publicRuntimeConfig.NEXT_PUBLIC_ELASTIC_SERVICE_ENVIRONMENT}`,

  distributedTracingOrigins: [],
  active: true,
  distributedTracing: true
})
