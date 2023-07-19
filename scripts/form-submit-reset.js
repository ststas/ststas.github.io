let form = document.getElementById("comments");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.submit();
  e.target.reset();
})
