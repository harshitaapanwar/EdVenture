document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    const suggestionsList = document.getElementById("suggestions-list");
  
    const sections = [
      { name: "Dashboard", id: "#dashboard" },
      { name: "Create Project", id: "#create-project" },
      { name: "Active Projects", id: "#active-projects" },
      { name: "Completed Projects", id: "#completed-projects" },
      { name: "Feedback", id: "#feedback" },
      { name: "View Project", id: "#view-project" },
      { name: "Upload Project", id: "#upload-project" },
      { name: "Edit Project", id: "#edit-project" },
      { name: "Add Task", id: "#add-task" },
      { name: "View Tasks", id: "#view-tasks" },
      { name: "View Issue", id: "#view-issue" },
      { name: "Ask to Chatbot", id: "#ask-chatbot" },
      { name: "Alumni Feedback", id: "#alumni-feedback" },
      { name: "Edit Feedback", id: "#edit-feedback" },
      { name: "Logout", id: "#logout" },
      { name: "View Profile", id: "#view-profile" },
      { name: "Edit Profile", id: "#edit-profile" }
    ];
  
    // Filter suggestions as user types
    searchBar.addEventListener("input", function () {
      const query = searchBar.value.toLowerCase();
      suggestionsList.innerHTML = ""; // Clear previous suggestions
  
      if (query) {
        const filteredSections = sections.filter(section => 
          section.name.toLowerCase().includes(query)
        );
  
        // Show matching suggestions
        filteredSections.forEach(section => {
          const suggestionItem = document.createElement("li");
          suggestionItem.textContent = section.name;
          suggestionItem.addEventListener("click", function () {
            window.location.hash = section.id;  // Navigate to the selected section
          });
          suggestionsList.appendChild(suggestionItem);
        });
      }
    });
  });
  