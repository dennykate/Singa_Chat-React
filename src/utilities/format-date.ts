function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();

  // Ensure the input date is not in the future
  if (date > now) {
    return "Invalid date: date is in the future";
  }

  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  }

  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleDateString("en-GB", options).replace(",", "");
}

export default formatDate;
