// util function that computes the fibonacci numbers
export default function fibonacci(n): number {
  if (n < 0) {
    return Number(-1);
  } else if (n == 0) {
    return Number(0);
  } else if (n == 1) {
    return Number(1);
  }

  return Number(fibonacci(n - 1)) + Number(fibonacci(n - 2));
}
