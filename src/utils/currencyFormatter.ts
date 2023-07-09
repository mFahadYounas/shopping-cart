export default function currencyFormatter (value: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'PKR'
  }).format(value)
}