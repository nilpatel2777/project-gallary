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
<script>
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const projects = document.querySelectorAll(".project-card");
  const clearBtn = document.getElementById("clear-filters");

  function filterProjects() {
    const activeFilters = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    projects.forEach(project => {
      const matches =
        activeFilters.length === 0 ||
        activeFilters.some(f => project.classList.contains(f));

      // This line makes items rearrange
      project.style.display = matches ? "block" : "none";
    });
  }

  checkboxes.forEach(cb => cb.addEventListener("change", filterProjects));

  clearBtn.addEventListener("click", () => {
    checkboxes.forEach(cb => (cb.checked = false));
    filterProjects();
  });

  // Initialize at start
  filterProjects();
</script>

