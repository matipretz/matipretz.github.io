// Function to toggle between light and dark themes
document.addEventListener("DOMContentLoaded", function () {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        toggleTheme()
    }
});
document.querySelectorAll('.toggler').forEach(function (element) {
    element.addEventListener('click', toggleTheme);
});

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

// Function to show a specific view by ID
document.addEventListener('DOMContentLoaded', function () {
    const views = document.querySelectorAll('.view');
    const viewShow = (id) => {
        views.forEach(view => view.style.display = 'none');
        document.getElementById(id).style.display = 'block';
    };

    // Event listeners for view links
    document.getElementById('viewlink1').addEventListener('click', function () {
        viewShow('view1');
    });

    document.getElementById('viewlink2').addEventListener('click', function () {
        viewShow('view2');
    });

    document.getElementById('viewlink3').addEventListener('click', function () {
        viewShow('view3');
        // Event listener for close button in modal
        const closeButton = document.querySelector('.close-button');
        const modal = document.getElementById('modal');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });

    // Show the initial view
    viewShow('view1');

    // Hide the loader
    document.getElementById('loader').style.display = 'none';
});

new TypeIt(".toggler", {
    strings: "/matipretz.ar",
    speed: 50,
    waitUntilVisible: true,
}).go();
