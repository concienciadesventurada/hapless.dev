type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

// TODO: Change locales so it respects real time formatting dd/mm/yyyy
export function formatDate(
  date: string,
  dateStyle: DateStyle = 'medium',
  locales = 'es'
) {
  const formatter = new Intl.DateTimeFormat(locales, {
    dateStyle
  });

  return formatter.format(new Date(date));
}
