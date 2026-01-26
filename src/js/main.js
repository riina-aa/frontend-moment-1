 const menuToggle = document.querySelector('.toggle');
      const header = document.querySelector('.header');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        header.classList.toggle('active');
      })