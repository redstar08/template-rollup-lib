export const sum = (...args: Array<any>) => {
  return args.reduce((start, result) => {
    return start + result
  }, 0)
}
