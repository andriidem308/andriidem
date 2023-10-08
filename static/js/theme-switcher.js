const body = document.querySelector('body');
const button = document.querySelector('#darkmode-label');
function toggleDark() {
    if (!body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme');
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") === "dark") {
document.getElementById("darkmode-checkbox").checked = true;
body.classList.add('dark-theme');
}

document.querySelector('#darkmode-label').addEventListener('change', toggleDark);
