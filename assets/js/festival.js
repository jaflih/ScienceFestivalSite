/* Science Festival Site */

// Menu
document.querySelectorAll('.open_menu img, .close_menu').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.open_menu').classList.toggle('hidden');
    document.querySelector('.menu').classList.toggle('hidden');
    document.querySelector('.homepage').classList.toggle('hidden');
  });
});
