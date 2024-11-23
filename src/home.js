const showHomePage = function () {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  content.appendChild(container);
  const header = document.createElement("h1");
  header.textContent = "Mahua Restaurant";
  const doc = document.createElement("div");
  doc.textContent = "Welcome to Mahua Restaurant!";
  container.appendChild(header);
  container.appendChild(doc);
};

export { showHomePage };
