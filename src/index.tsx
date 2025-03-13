export const getAllLanguages = (): string[] => {
  return Intl.supportedValuesOf('language');
};

export const getAllCurrencies = (): { code: string; name: string; symbol: string }[] => {
  const currencyCodes = Intl.supportedValuesOf('currency');
  const currencyFormatter = new Intl.DisplayNames(['en'], { type: 'currency' });

  return currencyCodes.map(code => ({
      code,
      name: currencyFormatter.of(code),
      symbol: new Intl.NumberFormat('en', { style: 'currency', currency: code })
          .formatToParts(1)
          .find(part => part.type === 'currency')?.value || code
  }));
};

export const getAllTimeZones = (): string[] => {
  return Intl.supportedValuesOf('timeZone');
};
