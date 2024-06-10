function click() {
  if (document.getElementById("menu").style.display === "none") {
    document.getElementById("menu").style.display = "block";
  } else {
    document.getElementById("menu").style.display = "none";
  }

  console.log(document.getElementById("menu").style.display);
}
