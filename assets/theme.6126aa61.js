window.onload=()=>{const t=window.matchMedia("(prefers-color-scheme: dark)"),e=localStorage.getItem("theme");if(e=="dark")console.log(document),document.body.classList.toggle("dark-theme");else if(e=="light")document.body.classList.toggle("light-theme");else{const o=t.matches?"dark":"light";localStorage.setItem("theme",o)}};
