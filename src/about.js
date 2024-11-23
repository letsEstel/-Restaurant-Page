const showAbout = function () {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  content.appendChild(container);
  const header = document.createElement("h1");
  header.textContent = "Find Us";
  const doc = document.createElement("div");
  doc.textContent = "On Shuangyushu Street!";
  container.appendChild(header);
  container.appendChild(doc);
};

export { showAbout };
