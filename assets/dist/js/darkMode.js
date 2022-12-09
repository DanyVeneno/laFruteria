if (localStorage.getItem("theme") == "dark") {
  setDarkMode();
  if (document.getElementById("checkbox").checked) {
    localStorage.setItem("checkbox", true);
  }
}
function setDarkMode() {
  let isDark = document.body.classList.toggle("darkMode");
  if (isDark) {
    setDarkMode.checked = true;
    localStorage.setItem("theme", "dark");
    document.getElementById("checkbox").setAttribute("checked", "checked");
  } else {
    setDarkMode.checked = true;
    localStorage.removeItem("theme", "dark");
  }
}
