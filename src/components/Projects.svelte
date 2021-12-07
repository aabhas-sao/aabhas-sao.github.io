<script lang="ts">
  interface ProjectType {
    id: number;
    title: string;
    image: string;
    src: string;
    desc: string;
    repo: string;
  }

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Game Basket",
      image: "https://tse2.mm.bing.net/th?id=OIP.6JO0KTb4yaQ39eXnUldqWwHaEK",
      src: "https://game-basket.vercel.app/",
      desc: "An ecommerce site built with Next.js and Firebase",
      repo: "https://github.com/aabhas-sao/GameBasket",
    },
    {
      id: 2,
      title: "Sudoku Solver",
      image:
        "https://cdn.dribbble.com/users/1405795/screenshots/4933784/media/c58da3142df1af56b7e2235fa0b25c7d.jpg?compress=1&resize=400x300",
      src: "https://aabhassao.me/sudoku-solver/",
      desc: "A react app that solves a sudoku problem using a backtracking algorithm.",
      repo: "https://github.com/aabhas-sao/sudoku-solver",
    },
    {
      id: 3,
      title: "Eklavya",
      image:
        "https://cdn.dribbble.com/users/2016587/screenshots/15119691/diamond_hands_copy_4x.jpg",
      src: "",
      desc: "An mobile app that provide easy access to proffessional guidance, roadmaps and career opportunities.",
      repo: "https://github.com/betaoverflow/eklavya",
    },
    {
      id: 4,
      title: "Drona",
      image:
        "https://cdn.dribbble.com/users/299116/screenshots/15061697/media/584121ad531edc02d2334ef2fb476881.jpg?compress=1&resize=400x300",
      desc: "A mobile app that enables running code written on paper",
      repo: "",
      src: "https://drona-gamma.vercel.app/",
    },
    {
      id: 5,
      title: "Donna",
      image:
        "https://camo.githubusercontent.com/c61194fc44eeb20dc58a3ebe35af40fdd11edd69477c1389e14a8aa27be26226/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646775793871707a692f696d6167652f75706c6f61642f76313633313432363530302f646f6e6e612f52656374616e676c655f33395f70723662366c2e706e67",
      desc: "Transform your smart devices to intelligent communicators.",
      repo: "https://github.com/betaoverflow/donna",
      src: "",
    },
    {
      id: 6,
      title: "Chase",
      image:
        "https://cdn.dribbble.com/users/1333728/screenshots/13988492/autofleet_3d_cars_dribbble.png?compress=1&resize=400x300",
      src: "",
      desc: "A 3d Racing game built with Unity Engine",
      repo: "https://github.com/aabhas-sao/Project-3DXRC",
    },
  ];
</script>

<div id="projects">
  <h1 class="heading">Projects</h1>
  <div class="projects">
    {#each projects as project (project.id)}
      <article class="project">
        <div class="left">
          <img src={project.image} alt={project.title} />
        </div>
        <div class="details">
          <h2 class="title">{project.title}</h2>
          <p class="description mobile-hide mt-2">
            {project.desc}
          </p>
          <div class="links">
            {#if project.src}
              <a target="_blank" rel="noopener noreferrer" href={project.src}>
                live project
              </a>
            {:else}
              <p
                class="dead-link"
                target="_blank"
                rel="noopener noreferrer"
                href={""}
              >
                live project
              </p>
            {/if}

            <a
              target="_blank"
              class="ml-1"
              rel="noopener noreferrer"
              href={project.repo}>source code</a
            >
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style lang="scss">
  .heading {
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      margin-left: 0.65em;
    }
  }
  .projects {
    .project {
      display: flex;
      flex-direction: column;
      margin-top: 2em;

      .left {
        width: 80vw;
        height: 25vh;
        margin: auto;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
          width: 35vw;
        }

        @media only screen and (min-width: 1024px) {
          width: 20vw;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        padding: 0.4em;

        .links {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          @media screen and (min-width: 768px) and (max-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 1024px) {
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }

        @media only screen and (min-width: 1024px) {
          padding: 0;
          margin-left: 1em;
          width: 20vw;
          flex-direction: column;
          justify-content: center;
        }
      }

      .title {
        font-size: 1.2em;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        align-items: center;
        width: 35vw;
      }

      @media only screen and (min-width: 1024px) {
        flex-direction: row;
      }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
    }

    @media only screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
