export default function DateConversion(isoDateString) {
  //   const isoDateString = "2023-10-05T07:49:20.000Z";
  const date = new Date(isoDateString);

  const options = {
    year: "numeric",
    day: "numeric",
    month: "long",

    // weekday: "long",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  const longDateFormat = date.toLocaleDateString("en-US", options);
  return longDateFormat;
}
