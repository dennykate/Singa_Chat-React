function timeValidation(timeString: string, timeGap: number = 5): boolean {
  const inputTime: Date = new Date(timeString);
  const currentTime: Date = new Date();

  const timeDifference: number = Math.abs(
    currentTime.getTime() - inputTime.getTime()
  );

  const timeGapInMilliseconds: number = timeGap * 60 * 1000;

  return timeDifference < timeGapInMilliseconds;
}

export default timeValidation;
