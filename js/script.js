document.addEventListener("DOMContentLoaded", (ev) => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');

            const content = item.nextElementSibling;
            if (content) {
                content.classList.toggle('active');
            }

            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
              } else {
                content.style.maxHeight = null;
              }
        })
    })
});