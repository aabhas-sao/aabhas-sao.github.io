<section id="about">
  <h1 class="heading mt-2">About</h1>
  <div class="box">
    <div class="left">
      <img src="../../public/assets/profile2.jpg" alt="Aabhas profile" />
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
  .box {
    height: 100vh;
    display: flex;
    flex-direction: column;

    .left {
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      @media screen and (min-width: 1024px) {
        width: 60vw;
        height: 60vh;
      }
    }

    .right {
      margin-top: 1em;
      @media screen and (min-width: 1024px) {
        margin-top: 0;
        margin-left: 1.5em;

        .description {
          font-size: 1.3em;
        }
      }

      @media screen and (min-width: 1024px) {
        margin-top: 25vh;
      }
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
</style>
