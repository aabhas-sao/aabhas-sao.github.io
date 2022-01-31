<script>
  import {
    ChevronDownIcon,
    ChevronUpIcon,
    MoonIcon,
    SunIcon,
  } from "svelte-feather-icons";
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { onMount } from "svelte";

  let current = "show";

  let open = false;
  const iconSize = "2x";
  const toggleSize = "24";

  const toggleNav = () => {
    open = !open;
  };

  let theme = "";
  onMount(() => {
    theme = localStorage.getItem("theme");
  });

  function toggle() {
    window.document.body.classList.toggle("dark-theme");

    let currentTheme = window.document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";

    // Finally, let's save the current preference to localStorage to keep using it
    localStorage.setItem("theme", currentTheme);
    theme = currentTheme;
  }
</script>

<nav id="mobile-only">
  <a class="logolink" href="/">
    <div class="monogram invert-black-white">AS</div>
  </a>
  <div id="theme-circle">
    <button id="theme-switch" on:click={toggle}>
      {#if theme === "dark"}
        <MoonIcon size={toggleSize} />
      {:else}
        <SunIcon size={toggleSize} />
      {/if}
    </button>
  </div>

  {#if open}
    <a transition:slide class="link" href="#projects">Projects</a>
    <a transition:slide class="link" href="#tech-stack">Stack</a>
    <a transition:slide class="link" href="#about">About</a>
    <a transition:slide class="link" href="#contact">Reach out</a>

    <div transition:slide class="socials">
      <a class="social" href="https://twitter.com/aabhas_sao">
        <svg
          class="socialicon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
          />
        </svg>
      </a>
      <a class="social" href="https://github.com/aabhas-sao">
        <svg
          class="socialicon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>

      <!-- <a transition:slide class="social" href="https://dev.to/me">
      <svg
        class="socialicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 40"
        style="enable-background:new 0 0 50 40"
        xmlSpace="preserve"
      >
        <path
          d="M15.7 15.5c-.4-.3-.7-.4-1.1-.4h-1.7v10.1h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.7c0-.6-.2-1-.6-1.3z"
        />
        <path
          d="M47 0H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM19.1 23.5c0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.3 1.3h-4.4V12.3h4.5c1.3 0 2.4.4 3.2 1.3.8.8 1.3 1.9 1.3 3.2v6.7zm9.1-8.4h-5.1v3.6h3.1v2.8h-3.1v3.7h5.1V28h-5.9c-.6 0-1-.2-1.4-.6-.4-.4-.6-.8-.6-1.4V14.2c0-.6.2-1 .6-1.4.4-.4.8-.6 1.4-.6h5.9v2.9zM37.5 26c-.6 1.3-1.3 2-2.2 2-.9 0-1.7-.7-2.2-2l-3.7-13.8h3.1L35.3 23l2.8-10.8h3.1L37.5 26z"
        />
      </svg>
    </a> -->
    </div>
  {/if}

  <div class="mt-2">
    <button
      class="invert-black-white"
      name="theme switcher"
      on:click={toggleNav}
    >
      {#if open}
        <ChevronUpIcon size={iconSize} />
      {:else}
        <ChevronDownIcon size={iconSize} />
      {/if}
    </button>
  </div>
</nav>

<nav id="lg-only">
  <a class="logolink" href="/">
    <div class="monogram invert-black-white">AS</div>
  </a>
  <a class="link" href="#projects">Projects</a>
  <a class="link" href="#tech-stack">Stack</a>
  <a class="link" href="#about">About</a>
  <a class="link" href="#contact">Reach out</a>
  <div class="socials">
    <a class="social" href="https://twitter.com/aabhas_sao">
      <svg
        class="socialicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
        />
      </svg>
    </a>
    <a class="social" href="https://github.com/aabhas-sao">
      <svg
        class="socialicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
      </svg>
    </a>

    <button id="theme-switch" on:click={toggle}>
      {#if theme === "dark"}
        <MoonIcon size={toggleSize} />
      {:else}
        <SunIcon size={toggleSize} />
      {/if}
    </button>

    <!-- <a class="social" href="https://dev.to/me">
      <svg
        class="socialicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 40"
        style="enable-background:new 0 0 50 40"
        xmlSpace="preserve"
      >
        <path
          d="M15.7 15.5c-.4-.3-.7-.4-1.1-.4h-1.7v10.1h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.7c0-.6-.2-1-.6-1.3z"
        />
        <path
          d="M47 0H3C1.3 0 0 1.3 0 3v34c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM19.1 23.5c0 1.3-.4 2.4-1.3 3.2-.8.9-1.9 1.3-3.3 1.3h-4.4V12.3h4.5c1.3 0 2.4.4 3.2 1.3.8.8 1.3 1.9 1.3 3.2v6.7zm9.1-8.4h-5.1v3.6h3.1v2.8h-3.1v3.7h5.1V28h-5.9c-.6 0-1-.2-1.4-.6-.4-.4-.6-.8-.6-1.4V14.2c0-.6.2-1 .6-1.4.4-.4.8-.6 1.4-.6h5.9v2.9zM37.5 26c-.6 1.3-1.3 2-2.2 2-.9 0-1.7-.7-2.2-2l-3.7-13.8h3.1L35.3 23l2.8-10.8h3.1L37.5 26z"
        />
      </svg>
    </a> -->
  </div>
</nav>

<style lang="scss">
  #mobile-only {
    @media screen and (min-width: 1024px) {
      display: none;
    }
    @media screen and (max-width: 1024px) {
      display: flex;
    }
  }

  #lg-only {
    @media screen and (min-width: 1024px) {
      display: flex;
    }

    @media screen and (max-width: 1024px) {
      display: none;
    }
  }

  nav {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    flex-direction: column;

    button {
      background-color: white;
      color: black;
    }

    .logolink {
      display: block;
      color: var(--t-fg);
      text-decoration: none;

      .monogram {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        margin-right: 0.5rem;
        font-size: 1.4em;
        color: var(--c-black);
        font-weight: 900;
        letter-spacing: -0.125rem;
        border: 3px solid currentColor;
      }
    }

    .link {
      color: var(--t-subdue);
      display: block;
      text-decoration: none;
      margin-top: 0.5em;
      font-size: var(--f-d1);
      text-transform: uppercase;
      padding-top: 0.75em;
      padding-bottom: 0.75em;

      @media screen and (min-width: 1024px) {
        margin-left: 1rem;
      }
    }
    .link:focus,
    .link:hover {
      color: var(--t-active);
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .socials {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    width: 20vw;
    justify-content: space-evenly;

    @media screen and (min-width: 1024px) {
      margin-left: auto;
    }
  }

  .socialicon {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    fill: var(--t-subdue);
    transition: fill linear 150ms;
  }
  .socialicon:hover {
    fill: var(--t-active);
  }
</style>
