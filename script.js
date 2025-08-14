document.getElementById("introBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  if (name) {
    alert(`Nice to meet you, ${name}!`);
  } else {
    alert("Please enter your name.");
  }
});
