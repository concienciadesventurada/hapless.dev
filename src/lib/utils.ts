type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
  date: string,
  dateStyle: DateStyle = "medium",
  locales = "es"
) {
  const formatter = new Intl.DateTimeFormat(locales, {
    dateStyle
  });

  if (!date) return "";

  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) return "";

  return formatter.format(parsedDate);
}
