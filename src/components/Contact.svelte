<script lang="ts">
  import { GithubIcon, TwitterIcon } from "svelte-feather-icons";
  const iconSize: string = "2x";
  let cnt = 0;
</script>

<section id="contact">
  <h1 class="heading">Get In Touch</h1>
  <div class="content">
    <p class="descripton">
      Reach out for possible collaborations if you like my work.
    </p>
    <div class="socials">
      <a class="invert-black-white" href="https://www.twitter.com/aabhas_sao">
        <TwitterIcon size={iconSize} />
      </a>
      <a class="invert-black-white" href="https://github.com/aabhas-sao">
        <GithubIcon size={iconSize} />
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  #contact {
    margin-top: 6em;
    .heading {
      text-align: center;
      font-size: 4em;
      margin-bottom: 0.5em;
    }

    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;

    .content {
      margin: auto;

      .socials {
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        a {
          color: var(--t-fg);
        }

        @media screen and (min-width: 1024px) {
          width: 25vw;
        }
      }
    }
  }
</style>
