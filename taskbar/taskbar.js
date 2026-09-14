fetch("taskbar/taskbar.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("taskbar").innerHTML = html;

        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "taskbar/taskbar.css";
        document.head.appendChild(css);

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".taskbar a").forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    });