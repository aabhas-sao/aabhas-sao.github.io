window.onload = () => {
    // Check for dark mode preference at the OS level
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    // Get the user's theme preference from local storage, if it's available
    const currentTheme = localStorage.getItem("theme");
    // If the user's preference in localStorage is dark...
    if (currentTheme == "dark") {
        // ...let's toggle the .dark-theme class on the body
        console.log(document)
        document.body.classList.toggle("dark-theme");
        // Otherwise, if the user's preference in localStorage is light...
    } else if (currentTheme == "light") {
        // ...let's toggle the .light-theme class on the body
        document.body.classList.toggle("light-theme");
    } else {
        const theme = prefersDarkScheme.matches ? "dark" : "light";
        localStorage.setItem("theme", theme)
    }
}
