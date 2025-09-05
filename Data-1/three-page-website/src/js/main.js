// Dynamic greeting based on time of day
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header h1");
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    header.textContent = `${greeting} Welcome to Our Website`;
});

// Theme toggle functionality
const themeToggleButton = document.createElement("button");
themeToggleButton.textContent = "Toggle Theme";
themeToggleButton.style.position = "fixed";
themeToggleButton.style.bottom = "20px";
themeToggleButton.style.right = "20px";
themeToggleButton.style.zIndex = "1000";
document.body.appendChild(themeToggleButton);

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Dark theme styles
const darkThemeStyles = document.createElement("style");
darkThemeStyles.textContent = `
    body.dark-theme {
        background-color: #121212;
        color: #e0e0e0;
    }
    body.dark-theme header {
        background: linear-gradient(90deg, #333, #555);
    }
    body.dark-theme .intro, body.dark-theme .updates {
        background: #1e1e1e;
        box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
    }
    body.dark-theme footer {
        background: #222;
    }
`;
document.head.appendChild(darkThemeStyles);