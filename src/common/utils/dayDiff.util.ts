export const dayDiff = (date1: Date, date2: Date) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const date1UTC = Date.UTC(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate(),
  );
  const date2UTC = Date.UTC(
    date2.getFullYear(),
    date2.getMonth(),
    date2.getDate(),
  );

  return Math.floor(Math.abs(date2UTC - date1UTC) / MS_PER_DAY);
};
