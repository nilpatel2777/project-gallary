const container = document.getElementById("project-list");
const categoryList = document.getElementById("category-list");

function displayProjects(filter = "all") {
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  container.innerHTML = filtered.map(p => `
    <div class="card" onclick="openProject(${p.id})">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>${p.category.toUpperCase()}</p>
    </div>
  `).join('');
}

displayProjects();

categoryList.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
    e.target.classList.add("active");
    displayProjects(e.target.dataset.category);
  }
});

function openProject(id) {
  window.location.href = `project.html?id=${id}`;
}
