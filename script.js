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

function setErrorMessage(value) {
  var message = "-denknow:" + value + ": command not found\n";
  return message;
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
      sliceValue = trimValue.slice(-15);
      console.log(sliceValue);
      if (sliceValue === "Command>connect") {
        terminal.value = "SUCCESS";
      } else {
        if (sliceValue.indexOf(">") >= 0) {
          var sliceCommand = sliceValue.substring(
            sliceValue.indexOf(">") + 1,
            sliceValue.length
          );
          terminal.value =
            value +
            setErrorMessage(sliceCommand.replace(/\r?\n/g, "")) +
            operater;
        } else {
          terminal.value = value + operater;
        }
        console.log("[" + value + "]");
        terminal.focus();
      }
    } else {
      if (value.indexOf(">") >= 0) {
        var sliceCommand = value.substring(
          value.indexOf(">") + 1,
          value.length
        );
        terminal.value =
          value +
          setErrorMessage(sliceCommand.replace(/\r?\n/g, "")) +
          operater;
      } else {
        terminal.value = value + operater;
      }
      console.log("[" + value + "]");
      terminal.focus();
    }
  }
});
