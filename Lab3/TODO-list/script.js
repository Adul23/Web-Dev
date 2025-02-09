function addTask() {
  const input = document.querySelector("#input");
  const task = input.value.trim();

  if (task !== "") {
      let li = document.createElement("li");
      li.textContent = task;

      // Create the close button for each task
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);

      // Append the task to the list
      document.querySelector("#list-container").appendChild(li);

      // Clear the input field
      input.value = "";

      // Close the task when the close button is clicked
      span.addEventListener('click', function () {
          li.style.display = "none";
      });
  } else {
      alert("Empty task!");
  }
}

document.querySelector("#list-container").addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
  }
});
