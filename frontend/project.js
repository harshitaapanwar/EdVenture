const uploadForm = document.getElementById('upload-project-form');
const editForm = document.getElementById('edit-project-form');
const projectList = document.getElementById('projects-list');
const editSelect = document.getElementById('edit-project-select');

let projects = []; // Store projects

// Upload Project
uploadForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('project-name').value;
  const description = document.getElementById('project-description').value;
  const fileInput = document.getElementById('project-file');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file to upload.');
    return;
  }

  const project = {
    id: Date.now(),
    name,
    description,
    file,
  };

  projects.push(project);
  renderProjects();
  uploadForm.reset();
});

// Render Projects in View Section
function renderProjects() {
  if (projects.length === 0) {
    projectList.innerHTML = '<p>No projects available. Start by uploading a project!</p>';
    editSelect.innerHTML = '<option value="" disabled selected>Select a project to edit</option>';
    return;
  }

  projectList.innerHTML = '';
  editSelect.innerHTML = '<option value="" disabled selected>Select a project to edit</option>';

  projects.forEach((project) => {
    // View Section
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-item');
    projectDiv.innerHTML = `
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <p>
        File: 
        <a href="#" onclick="downloadFile(${project.id})">${project.file.name}</a>
      </p>
    `;
    projectList.appendChild(projectDiv);

    // Edit Dropdown
    const option = document.createElement('option');
    option.value = project.id;
    option.textContent = project.name;
    editSelect.appendChild(option);
  });
}

// Download File Functionality
function downloadFile(id) {
  const project = projects.find((p) => p.id === id);
  if (project) {
    const url = URL.createObjectURL(project.file);
    const a = document.createElement('a');
    a.href = url;
    a.download = project.file.name;
    a.click();
  }
}

// Edit Project
editSelect.addEventListener('change', () => {
  const projectId = Number(editSelect.value);
  const project = projects.find((p) => p.id === projectId);

  if (project) {
    document.getElementById('edit-project-name').value = project.name;
    document.getElementById('edit-project-description').value = project.description;
  }
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const projectId = Number(editSelect.value);
  const name = document.getElementById('edit-project-name').value;
  const description = document.getElementById('edit-project-description').value;
  const fileInput = document.getElementById('edit-project-file');
  const file = fileInput.files[0];

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  if (projectIndex !== -1) {
    projects[projectIndex].name = name;
    projects[projectIndex].description = description;

    if (file) {
      projects[projectIndex].file = file;
    }

    renderProjects();
    editForm.reset();
  }
});
