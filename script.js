


document.addEventListener('DOMContentLoaded', () => {
  const naviLinks = document.querySelectorAll('.nav-link');
  naviLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // remove if you want navigation
     

      naviLinks.forEach(l => l.classList.remove('active'));

      
      link.classList.add('active');

      
      alert(`You clicked on ${link.textContent});
    });
  });
});
      





