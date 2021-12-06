<script>
</script>

<div class="hero">
  <div class="description">
    <h1 class="text-sm">Hi, I'm Aabhas Sao</h1>
    <p>
      I am a Full Stack Developer / Designer.
      <br />
      Currently pursuing B.Tech in Industrial Design from NIT Rourkela.
    </p>
    <div class="action-area">
      <button><a href="mailto:aabhassao0@gmail.com">Contact Me</a></button>
    </div>
  </div>
  <div class="right">
    <img
      class="img"
      alt="pikachu"
      src="https://res.cloudinary.com/aabhas/image/upload/v1638702840/pikachu.png"
    />
  </div>
</div>

<style lang="scss">
  .hero {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    line-height: 2;
    height: 85vh;
    width: 85vw;
    margin: auto;

    .description {
      padding: 1em;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media only screen and (min-width: 1024px) {
        padding: 2em;
        min-width: 25vw;
      }

      h1 {
        font-family: "Sacramento", cursive;
        font-size: 3em;

        @media only screen and (min-width: 1024px) {
          font-size: 6em;
          line-height: 1.2;
        }
      }

      p {
        margin-top: 1em;
        @media only screen and (min-width: 1024px) {
          font-size: 1.6em;
        }
      }

      .action-area {
        margin-top: 1.5em;
      }
    }

    a {
      color: white;
      text-decoration: none;
    }

    .right {
      flex-direction: columns;
      flex: 2;
      justify-content: center;
      .img {
        width: 100%;
        height: 60vh;
        margin: auto;
        object-fit: cover;
        @media only screen and (min-width: 1024px) {
          height: 50vh;
        }
      }

      @media only screen and (min-width: 1024px) {
        width: 60vw;
        height: 60vh;
      }
    }

    @media only screen and (min-width: 1024px) {
      height: 90vh;
      width: 80vw;
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
