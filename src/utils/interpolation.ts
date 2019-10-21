export const Interpolation = { // tslint:disable-line:variable-name
  Linear(startValue: number, endValue: number, normalizedValue: number): number {
    return startValue + normalizedValue * (endValue - startValue);
  },
};
