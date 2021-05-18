function addingEventListener() {
  const input = document.getElementById('input');
  input.addEventListener('click', function eventToListen(theEvent) {
  alert('I was clicked!')
  })
}

