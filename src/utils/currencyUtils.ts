
export type CurrencyFormatOptions = {
  currency?: string
  region  ?: string
  style   ?: string
}

export const currencyFormat = (value = 0, options?: CurrencyFormatOptions) => {
  const {
    region   = 'en-US',
    currency = 'USD',
    style    = 'currency',
    ...rest
  } = options || {}

  return new Intl.NumberFormat(
    region,
    {
      style,
      currency,
      ...rest
    }
  ).format(value || 0)
}
