'use strict';
const item = document.querySelector('.item');
const cover = document.querySelector('.item-cover');
cover.addEventListener('click', e => {
    let isOut = cover.classList.contains('xyz-out');
    if (!isOut) {
        cover.classList.remove('xyz-in');
        cover.classList.add('xyz-out');
    }
});

document.querySelector('.close-details').addEventListener('click', e => {
    let isOut = cover.classList.contains('xyz-out');

    if (isOut) {
        cover.classList.remove('xyz-out');
        cover.classList.add('xyz-in');
    }
});

document.querySelector('.check-action').addEventListener('click', e => {
    item.classList.add('checked');

    setTimeout(() => {
        item.classList.add('xyz-out');
        setTimeout(() => {
            item.classList.add('d-none');
        }, 1000);
    }, 2100);
});