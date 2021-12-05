<script>
  const projects = [
    {
      id: 1,
      title: "Game Basket",
      image: "https://tse2.mm.bing.net/th?id=OIP.6JO0KTb4yaQ39eXnUldqWwHaEK",
      src: "https://game-basket.vercel.app/",
    },
    {
      id: 2,
      title: "Chase",
      image:
        "https://cdn.dribbble.com/users/1333728/screenshots/13988492/autofleet_3d_cars_dribbble.png?compress=1&resize=400x300",
      src: "https://game-basket.vercel.app/",
    },
  ];
</script>

<div id="projects">
  <h1 class="pt-2">Projects</h1>
  {#each projects as project (projects.id)}
    <article class="project">
      <div class="left">
        <img src={project.image} alt={project.title} />
      </div>
      <div class="details">
        <h2 class="title">{project.title}</h2>
        <p class="description mobile-hide mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          earum commodi ut soluta, cupiditate ad ipsum quae culpa incidunt!
          Voluptas suscipit dolorem accusamus soluta rerum temporibus corporis
          quam, dolore quod!
        </p>
        <a href={project.src}>open project</a>
      </div>
    </article>
  {/each}
</div>

<style lang="scss">
  .project {
    display: flex;
    flex-direction: column;
    margin-top: 2em;

    img {
      width: 100%;
      height: 30vh;
      object-fit: cover;

      @media only screen and (min-width: 1024px) {
        width: 30vw;
      }
    }

    .details {
      display: flex;
      flex-direction: row;
      padding: 0.4em;
      justify-content: space-between;

      @media only screen and (min-width: 1024px) {
        flex-direction: column;
        margin-left: 2em;
        justify-content: start;
      }
    }

    .title {
      font-size: 1.2em;
    }

    @media only screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
</style>
