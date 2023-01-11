const main = document.getElementsByTagName("main")[0];

function createTable(parent) {
  const table = document.createElement("table");
  table.style.border = "1px solid black";

  let num = 1;
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");
      td.innerText = num++;
      tr.append(td);
    }
    table.append(tr);
  }

  parent.append(table);
}

createTable(main);
