<section id="about">
  <h1 class="heading mt8">About</h1>
  <div class="box">
    <div class="left">
      <img src="assets/images/profile.webp" alt="Aabhas profile" />
    </div>
    <div class="right">
      <p class="description">
        Hi I'm Aabhas. I am a full stack developer and design enthusiast from
        India. I am interested in software development and tech in general. I
        like building things.
      </p>
    </div>
  </div>
</section>

<style lang="scss">
  #about {
    height: 100vh;
  }
  .heading {
    text-align: center;
  }

  .box {
    /* height: 80vh; */
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .left {
      height: 10em;
      width: 10em;
      margin: auto;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
      }

      @media screen and (min-width: 1024px) {
        width: 20em;
        height: 20em;
      }
    }

    .right {
      margin: auto;
      text-align: center;
      margin-top: 1em;
      padding: 0.5em;
      text-align: center;

      @media screen and (min-width: 1024px) {
        max-width: 40%;
        text-align: left;

        .description {
          font-size: 1.1em;
          text-align: center;
        }
      }
    }
  }
</style>
