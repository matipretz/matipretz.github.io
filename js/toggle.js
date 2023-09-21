document.getElementById("toggler").addEventListener("click", toggleTheme);

function toggleTheme() {
    const head = document.querySelector("head");
    const toggler = document.createElement("link");
    toggler.href = "css/dark.css";
    toggler.rel = "stylesheet";
    toggler.id = "darkMode";

    if (!!document.getElementById("darkMode")) {
        head.removeChild(document.getElementById("darkMode"));

    } else {
        head.append(toggler);
    }
}