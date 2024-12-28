/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
import { useMutation, UseMutationOptions } from 'react-query'
// import { UseMutationOptions } from 'react-query'

export default function createMutation<T extends (...args: any) => Promise<any>>(
  fn: T,
  options?: UseMutationOptions<any>,
) {
  return () =>
    useMutation<Awaited<ReturnType<T>>, null, Parameters<T>>({
      ...(options as any),
      mutationKey: [fn.name],
      mutationFn: (args: Parameters<T>) => fn(...args),
    })
}
