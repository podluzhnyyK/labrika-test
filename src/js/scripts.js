const headerNav = document.querySelector('.header-nav');
const headerRegistration = document.querySelector('.header-registration-wrap');
headerNav.classList.add('main-navigation');
headerRegistration.classList.add('main-navigation');

document.querySelector('.btn--burger').addEventListener('click', () => {
    headerNav.classList.toggle('main-navigation--active');
    headerRegistration.classList.toggle('main-navigation--active');
});

