/**
 * the date is based on system called unix Epoch
 * this system starts counting it since jan 1 ,1970 UTC
 *
 * when you create a new date it stores as a number of milliseconds, since
 * midnight jan 1, 1970 UTC.
 **/

/**
 *  let date
 */

    //let currentDate = new Date();
let currentDate = new Date ('2025-12-31T22:30:00-05:00')
console.log(currentDate);
console.log(currentDate.toDateString());
console.log(currentDate.getFullYear()); //local time zone
console.log(currentDate.getHours());

/*
when handling shared, global or system level. utc works as it neutralize the cal
by keeping it consistent,
 */
console.log(currentDate.getUTCFullYear()); //coordinated Universal Time

/**
 * cosnt date
 */

const date = new Date("2024-01-01T00:00:00");
console.log(date.toDateString());
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getUTCDate())


