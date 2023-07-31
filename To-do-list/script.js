function addTask() {
    const inputElement = document.getElementById("taskInput");
    const taskText = inputElement.value.trim();
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(li);
      inputElement.value = "";
    }
  }
  
  function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  