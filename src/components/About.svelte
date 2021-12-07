<section id="about">
  <h1 class="heading mt8">About</h1>
  <div class="box">
    <div class="left">
      <img src="../../public/assets/profile2.jpg" alt="Aabhas profile" />
    </div>
    <div class="right">
      <p class="description">
        Hi I'm Aabhas. <br /> I am a full stack developer and design enthusiast
        from India. <br /> I am interested in software development and tech in general.
        I like building things.
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
    height: 80vh;
    display: flex;
    flex-direction: column;

    .left {
      height: 40vh;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      @media screen and (min-width: 1024px) {
        width: 30vw;
        height: 40vh;
      }
    }

    .right {
      margin-top: 1em;
      padding: 0.5em;

      @media screen and (min-width: 1024px) {
        margin-top: 0;
        margin-left: 1.5em;
        max-width: 40%;

        .description {
          font-size: 1.1em;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      margin-top: 4em;
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
