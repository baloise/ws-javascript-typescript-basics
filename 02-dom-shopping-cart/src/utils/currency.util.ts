export const currency = (num: number, currency = "CHF"): string => {
  if (num >= 0) {
    return `${currency} ${num.toFixed(2)}`;
  }
  return "";
};
