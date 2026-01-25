

AOS.init({
    duration: 1000,     // animation speed
    easing: 'ease-in-out',
    once: true,         // animate once
    offset: 120         // trigger point
});



window.addEventListener('scroll', () => {
    document.querySelector('.modern-navbar').classList.toggle('scrolled', window.scrollY > 80);
});



const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.filter-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        menuItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
