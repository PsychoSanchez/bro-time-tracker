const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const DAYS_IN_A_WEEK = 7;

export const getIsoDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const isoDate = `${year}-${month}-${day}`;

  return isoDate;
};

export const getPastWeekIsoDates = () => {
  const pastWeekDates = new Array(DAYS_IN_A_WEEK).map((_, index) =>
    getIsoDate(new Date(Date.now() - DAY_IN_MS * index))
  );

  return pastWeekDates;
};

export const getMinutesInMs = (number: number) => number * MINUTE_IN_MS;

export const getHoursInMs = (number: number) => number * HOUR_IN_MS;
export const getDaysInMs = (number: number) => number * DAY_IN_MS;

export const getTimeFromMs = (number: number) => {
  const seconds = Math.floor((number / SECOND_IN_MS) % 60);
  const minutes = Math.floor((number / MINUTE_IN_MS) % 60);
  const hours = Math.floor((number / HOUR_IN_MS) % 24);

  return `${hours > 0 ? `${hours}h ` : ''}${
    minutes > 0 ? `${minutes}m ` : ''
  }${seconds}s`;
};

export const getTimeWithoutSeconds = (number: number) => {
  const minutes = Math.floor((number / MINUTE_IN_MS) % 60);
  const hours = Math.floor((number / HOUR_IN_MS) % 24);

  return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
};
