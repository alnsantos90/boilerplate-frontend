import router from 'next/router'

export function redirectsErrors(status: number) {
  switch (status) {
    case 400:
      router.push(`/error/400`)
      break
    case 401:
      router.push(`/error/401`)
      break
    case 403:
      router.push(`/error/403`)
      break
    case 500:
      router.push(`/error/500`)
      break

    default:
      return status
  }
}
