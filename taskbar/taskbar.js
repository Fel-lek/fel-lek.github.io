fetch("../taskbar/taskbar.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("taskbar").innerHTML = html;

        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = "../taskbar/taskbar.css";
        document.head.appendChild(css);

        const currentPage = window.location.pathname.split("/").pop();

        document.querySelectorAll(".taskbar a").forEach(link => {
            const linkPage = link.getAttribute("href").split("/").pop();

            if (linkPage === currentPage) {
                link.classList.add("active");
            }
        });
    });