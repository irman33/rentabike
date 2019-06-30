export function formatPrice(dollars) {
  return `$${(dollars).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}