export const todayDate = new Date();

export const dayBeforeDate = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth(),
  todayDate.getDate() - 1
);

export const weekBeforeDate = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth(),
  todayDate.getDate() - 7
);

export const yearBeforeDate = new Date(
  todayDate.getFullYear(),
  todayDate.getMonth(),
  todayDate.getDate() - 365
);

export const allTimeDate = new Date(+0);
