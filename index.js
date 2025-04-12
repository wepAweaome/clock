const theme = new Theme();
theme.install(document);
theme.start();

// clock
setInterval(() => {
  t = new Date();
  hr = t.getHours();
  min = t.getMinutes();
  sec = t.getSeconds();

  console.log(t);

  // analog
  hr_rotation = 30 * hr + min / 2;
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;

  // digital
  time = t.toLocaleTimeString("en-gb", { hour12: true, timeStyle: "short" });
  document.querySelector("#digital-clock p").innerHTML = time;

  // date
  const dateFormat = {
    month: "short",
    day: "numeric",
  };
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = weekday[t.getDay()];
  date = t.toLocaleDateString("en-us", dateFormat);
  let fullDate = `${day} ${date}`;
  document.querySelector("#date-clock p").innerHTML = fullDate;
}, 1000);
