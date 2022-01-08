let display = document.querySelector(".display");
let bts = Array.from(document.querySelectorAll("button"));

bts.map((bt) => {
  bt.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "RESET":
        display.innerText = "";
        break;
      case "DEL":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (error) {
          display.innerText = "Error!!";
        }

        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});
