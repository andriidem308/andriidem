const body = document.querySelector('body');
const button = document.querySelector('#darkbutton');
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
document.getElementById("darkbutton-checkbox").checked = true;
body.classList.add('dark-theme');
}

document.querySelector('#darkbutton').addEventListener('change', toggleDark);
