export const timer = (dateString) => {
  const timerDays = document.querySelector(".timer__days");
  const timerHours = document.querySelector(".timer__hours");
  const timerMinutes = document.querySelector(".timer__minutes");
  const timerSeconds = document.querySelector(".timer__seconds");
  let intervalId;
  const stringDate = dateString;
  const numWord = (value, arrays) => {
    value = Math.abs(value) % 100;
    let lastNum = value % 10;
    if ((value > 10) & (value <= 20)) return arrays[2];
    if (lastNum > 1 && lastNum < 5) return arrays[1];
    if (lastNum === 1) return arrays[0];
    return arrays[2];
  };

  const updateTimer = () => {
    const date = new Date();
    const dateDaedLine = new Date(stringDate).getTime();
    const timeRemaining = (dateDaedLine - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = Math.floor((timeRemaining / 60 / 60) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? "0" + days : days;
    const fHours = hours < 10 ? "0" + hours : hours;
    const fMinutes = minutes < 10 ? "0" + minutes : minutes;
    const fSeconds = seconds < 10 ? "0" + seconds : seconds;

    timerDays.textContent = fDays;
    timerHours.textContent = fHours;
    timerMinutes.textContent = fMinutes;
    timerSeconds.textContent = fSeconds;
    timerDays.nextElementSibling.textContent = numWord(days, [
      "день",
      "дня",
      "дней",
    ]);
    timerHours.nextElementSibling.textContent = numWord(hours, [
      "час",
      "часа",
      "часов",
    ]);
    timerMinutes.nextElementSibling.textContent = numWord(minutes, [
      "минута",
      "минуты",
      "минут",
    ]);
    timerSeconds.nextElementSibling.textContent = numWord(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      timerDays.textContent = "00";
      timerDays.style.color = "red";
      timerHours.textContent = "00";
      timerHours.style.color = "red";
      timerMinutes.textContent = "00";
      timerMinutes.style.color = "red";
      timerSeconds.textContent = "00";
      timerSeconds.style.color = "red";
    }
  };

  intervalId = setInterval(updateTimer, 500);

  console.log();
};
