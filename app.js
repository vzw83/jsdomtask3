const TABLE = document.querySelector("#table");
const TBODY = document.querySelector("#tbody");
const BTN_ROW = document.querySelector("#row");
const BTN_COLUMN = document.querySelector("#column");
const FIRST_CELL = document.querySelector("#first-cell");

TABLE.addEventListener("click", (event) => {
  if (event.target.classList.contains("enabled")) {
    event.target.classList.remove("enabled");
  } else {
    event.target.classList.add("enabled");
  }
});

BTN_ROW.addEventListener("click", (event) => {
  const elem = TBODY.querySelector("tr:last-child").cloneNode(true);
  elem.querySelectorAll("td").forEach((element)=>{
    element.classList.remove("enabled")
  });
  TBODY.append(elem);
});
