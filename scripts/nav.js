const mobile_nav = document.querySelector('nav.mobile');
const mobile_nav_button = document.querySelector('.mobile_nav_button');
const body = document.querySelector('body');
const mobile_nav_close_button = document.querySelector('.mobile_nav_close_button');
const mobile_nav_open_button = document.querySelector('.mobile_nav_open_button');

mobile_nav_button.addEventListener('click', () => {
    mobile_nav.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
    mobile_nav_close_button.classList.toggle('hidden');
    mobile_nav_open_button.classList.toggle('hidden');
});

const mobile_nav_items = mobile_nav.querySelectorAll('.item');
mobile_nav_items.forEach((item) => {
    let children = item.querySelector('.children');
    let text = item.querySelector('.text');
    let icon = text.querySelector('span');

    if (children) {
        text.addEventListener('click', () => {
            console.log('click')
            children.classList.toggle('active');
            icon.classList.toggle('blue-font');
        });
    }
});