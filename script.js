var terminal = null;
var screenWidth, screenHeight;
var operater = "Command> ";
var value = "";

function setTerminal() {
  let innerWidth = window.innerWidth;
  let innerHeight = window.innerHeight;
  terminal.style.innerWidth = innerWidth + "px";
  terminal.style.innerHeight = innerHeight + "px";
}

window.addEventListener("load", function () {
  terminal = document.getElementById("terminal");
  setTerminal();
  terminal.value = operater;
  terminal.focus();
});

window.addEventListener("resize", function () {
  setTerminal();
});

window.addEventListener("keyup", function (e) {
  let key = e.keyCode;

  if (key == 13) {
    value = terminal.value;
    trimValue = value.replace(/\s+/g, "");

    if (trimValue.length >= 15) {
      console.log(trimValue);
      sliseValue = trimValue.slice(-15);
      console.log(sliseValue);
      if (sliseValue === "Command>connect") {
        terminal.value = "SUCCESS";
      } else {
        terminal.value = value + operater;
        console.log("[" + value + "]");
        terminal.focus();
      }
    } else {
      terminal.value = value + operater;
      console.log("[" + value + "]");
      terminal.focus();
    }
  }
});
