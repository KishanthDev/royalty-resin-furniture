export const getDiscountText = (
  price?: string | null,
  priceOriginal?: string | null
): string | null => {
  if (!price || !priceOriginal) return null;

  const current = Number(price.replace(/[^0-9.-]+/g, ""));
  const original = Number(priceOriginal.replace(/[^0-9.-]+/g, ""));

  // check for invalid numbers
  if (isNaN(current) || isNaN(original) || original <= current) {
    return null;
  }

  const discount = Math.round(((original - current) / original) * 100);

  return `${discount}% OFF`;
};