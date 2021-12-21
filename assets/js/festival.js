/* Science Festival Site */

// Menu
document.querySelectorAll('.open_menu img, .close_menu').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.open_menu').classList.toggle('hidden');
    document.querySelector('.menu').classList.toggle('hidden');
    document.querySelector('.homepage').classList.toggle('hidden');
  });
});

const header = document.querySelector('header');

function scrolled() {
  const currentScroll = document.body.scrollTop || document.documentElement.scrollTop;

  if (currentScroll >= 10) {
    header.classList.add('header_white');
  } else {
    header.classList.remove('header_white');
  }
}

document.addEventListener('scroll', scrolled, false);
