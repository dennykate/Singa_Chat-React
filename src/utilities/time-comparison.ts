function timeComparison(
  time1: string,
  time2: string,
  seconds: number
): boolean {
  const date1: Date = new Date(time1);
  const date2: Date = new Date(time2);

  const timeDifference: number = Math.abs(date1.getTime() - date2.getTime());

  const timeGapInMilliseconds: number = seconds * 1000;

  return timeDifference > timeGapInMilliseconds;
}

export default timeComparison;
