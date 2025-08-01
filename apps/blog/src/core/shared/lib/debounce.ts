export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  timeout = 300,
) {
  let timer: ReturnType<typeof setTimeout>;
  return function <U>(this: U, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
