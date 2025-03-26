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
  time = t.toLocaleTimeString("en-gb", { hour12: false, timeStyle: "short" });
  document.querySelector("#digital-clock p").innerHTML = time;

  // date
  const dateFormat = {
    month: "short",
    day: "numeric",
  };
  const weekday = ["日", "月", "火", "水", "木", "金", "土"];
  let day = weekday[t.getDay()];
  date = t.toLocaleDateString("ja-JP", dateFormat);
  let fullDate = `${date}(${day})`;
  document.querySelector("#date-clock p").innerHTML = fullDate;
}, 1000);
