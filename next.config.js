/** @type {import('next').NextConfig} */
module.exports = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_AMPLITUDE_API_TOKEN:
      process.env.NEXT_PUBLIC_AMPLITUDE_API_TOKEN,
    NEXT_PUBLIC_ELASTIC_SERVICE_NAME:
      process.env.NEXT_PUBLIC_ELASTIC_SERVICE_NAME,
    NEXT_PUBLIC_ELASTIC_SERVICE_URL:
      process.env.NEXT_PUBLIC_ELASTIC_SERVICE_URL,
    NEXT_PUBLIC_ELASTIC_SERVICE_VERSION:
      process.env.NEXT_PUBLIC_ELASTIC_SERVICE_VERSION,
    NEXT_PUBLIC_ELASTIC_SERVICE_ENVIRONMENT:
      process.env.NEXT_PUBLIC_ELASTIC_SERVICE_ENVIRONMENT
  },
  serverRuntimeConfig: {
    ELASTIC_APM_SERVICE_NAME: process.env.ELASTIC_APM_SERVICE_NAME,
    ELASTIC_APM_SERVER_URL: process.env.ELASTIC_APM_SERVER_URL,
    ELASTIC_APM_SECRET_TOKEN: process.env.ELASTIC_APM_SECRET_TOKEN,
    ELASTIC_APM_ENVIRONMENT: process.env.ELASTIC_APM_ENVIRONMENT
  },
  reactStrictMode: true
}
