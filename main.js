//document.getElementById("clock").textContent=showTime()

async function showTime(time) {
  if (time < 0 || !time) {
    time = 29;
  }
  do {
    time--;
    document.getElementById("min").textContent = time;
    let secCountDown = await showSec();
    if (secCountDown == "1min") {
      console.log("sec count down is done");
    }
    if (time == 0) {
      document.getElementById("time").disabled = false;
      document.querySelector("#submit").disabled = false;
    }
  } while (time > 0);

  function showSec() {
    return new Promise((res, rej) => {
      let sec = 60;
      let secCount = setInterval(() => {
        if (sec > 0) {
          sec--;
          document.getElementById("sec").textContent = sec;
        } else {
          clearInterval(secCount);
          res("1min");
        }
      }, 100);
    });
  }
}
document.querySelector("#submit").addEventListener("click", handler);

function handler() {
  let time = document.getElementById("time").value;
  document.getElementById("time").value = "";
  console.log(time);
  if (time <= 60) {
    showTime(time);
  }
  document.getElementById("time").disabled = true;
  document.querySelector("#submit").disabled = true;
}
