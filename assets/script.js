const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

let interval = setInterval(() => {
  var time = new Date()

  var HH = String(time.getHours()).padStart(2, "0")
  var mm = String(time.getMinutes()).padStart(2, "0")
  var ss = String(time.getSeconds()).padStart(2, "0")

  hours.innerText = HH
  minutes.innerText = mm
  seconds.innerText = ss
})
