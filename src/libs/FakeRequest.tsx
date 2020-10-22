export async function fakeRequest<T>(
  success: boolean,
  response: T,
  timeout: number = 1000
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!success) return reject()
      resolve(response)
    }, timeout)
  })
}
