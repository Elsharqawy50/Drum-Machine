let key = document.querySelectorAll(".sound")
for (let i = 0; i < key.length; i++) {
  key[i].onclick = function () {
    key[i].classList.add("clicked")
    setTimeout (function () {
      key[i].classList.remove("clicked")
    }, 100)
    let aud = new Audio("/sound/" + key[i].firstElementChild.innerHTML + ".wav")
    aud.play()
  } 
}
document.addEventListener("keypress",function (e) {
  let key = document.querySelector("." + e.key)
  key.classList.add("clicked")
    setTimeout (function () {
      key.classList.remove("clicked")
    }, 100)
    let aud = new Audio("/sound/" + e.key + ".wav")
    aud.play()
})
