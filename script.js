function togglemode() {
  const html = document.documentElement
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  } todo este código pode ser mudado pelo toggle
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
