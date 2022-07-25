import amplitude from 'amplitude-js'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export function initAmplitude(ampId: string) {
  amplitude
    .getInstance()
    .init(`${publicRuntimeConfig.NEXT_PUBLIC_AMPLITUDE_API_TOKEN}`, ampId)
}
