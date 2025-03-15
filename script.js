document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.createElement("button");
    themeToggle.textContent = "Preklopi temo";
    themeToggle.style.display = "block";
    themeToggle.style.margin = "20px auto";
    themeToggle.style.padding = "10px";
    themeToggle.style.cursor = "pointer";
    document.body.insertBefore(themeToggle, document.body.firstChild);

    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});