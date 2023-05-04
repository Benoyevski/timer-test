const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

function createTimerAnimator() {
    return (seconds) => {
        const hours = Math.floor(seconds / 3600)
            .toString()
            .padStart(2, "0");
        const minutes = Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, "0");
        const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
        timerEl.textContent = `${hours}:${minutes}:${remainingSeconds}`;
    };
}

const animateTimer = createTimerAnimator();

let timerId;
let seconds;

buttonEl.addEventListener("click", () => {
    seconds = Number(inputEl.value);
    animateTimer(seconds);
    clearInterval(timerId);
    timerId = setInterval(() => {
        seconds--;
        if (seconds < 0) {
            clearInterval(timerId);
            return;
        }
        animateTimer(seconds);
    }, 1000);
    inputEl.value = "";
});
