// toggle dark-light theme
const themeToggle = document.getElementById('theme-toggle')
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

// active sidebar buttons
const sidebarLink = document.querySelectorAll('.sidebar .sidebar-items li a:not(.logout)');
console.log(sidebarLink);
sidebarLink.forEach(a => {
    const li = a.parentElement;
    a.addEventListener('click', () => {
        sidebarLink.forEach(a => {
            a.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});

// menu show hide
const menuBtn = document.querySelector('.main .bx-menu')
const sidebar = document.querySelector('.sidebar')
menuBtn.addEventListener('click',() => {
    sidebar.classList.toggle('closed')
})

// responsive - close menu and search field
const searchBtn = document.querySelector('.main nav form .search-btn');
const searchBtnIcon = document.querySelector('.main nav form .bx');
const searchForm = document.querySelector('.main nav form');

searchBtn.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault;
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            console.log(searchBtnIcon)
            searchBtnIcon.classList.replace('bx-search-alt', 'bx-x');
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search-alt');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add('closed');
    } else {
        sidebar.classList.remove('closed');
    }
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});