const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default function formatCurrency(price: number) {
  return CURRENCY_FORMATTER.format(price);
}
