const showMenu = function () {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  const header = document.createElement("h3");
  const menu = document.createElement("ol");
  const foods = ["Dapan Chicken", "Beef noodles", "Tianpei zi"];
  header.textContent = "Menu";
  for (const food of foods) {
    const foodOnMenu = document.createElement("li");
    foodOnMenu.textContent = `${food}`;
    menu.appendChild(foodOnMenu);
  }
  container.appendChild(header);
  container.appendChild(menu);
  content.appendChild(container);
};

export { showMenu };
