document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        toggleTheme()
    }
});

document.getElementById("toggler").addEventListener("click", toggleTheme)
function toggleTheme() {
    const head = document.querySelector("head");
    const toggler = document.createElement("link");
    toggler.href = "css/dark.css";
    toggler.rel = "stylesheet";
    toggler.id = "darkMode";

    if (!!document.getElementById("darkMode")) {
        head.removeChild(document.getElementById("darkMode"));
        localStorage.setItem("theme", "light");
    } else {
        head.append(toggler);
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const vistas = document.querySelectorAll('.vista');
    
    const mostrarVista = (id) => {
        vistas.forEach(vista => vista.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    };

    document.getElementById('viewlink1').addEventListener('click', function() {
        mostrarVista('vista1');
    });

    document.getElementById('viewlink2').addEventListener('click', function() {
        mostrarVista('vista2');
    });

    document.getElementById('viewlink3').addEventListener('click', function() {
        mostrarVista('vista3');
    });
});
