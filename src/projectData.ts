interface projectDataType {
  slug: string;
  title: string;
  date: Date;
  projectPic: string;
  projectPicAlt: string;
  codePic: string;
  codePicAlt: string;
  liveLink: string;
  githubLink: string;
  description: string;
  learned: string;
  tech: {
    src: string;
    alt: string;
    styleOverride?: string;
  }[];
}

export const data: projectDataType[] = [
  {
    slug: "movie-db",
    title: "Movie Database",
    date: new Date("2022-08-19"),
    projectPic: "../movie-db.jpg",
    projectPicAlt: "Movie Database Screenshot.",
    codePic: "../movie-db-code.png",
    codePicAlt: "Movie Database Code Screenshot.",
    liveLink: "https://jbmovies.joshborseth.com/",
    githubLink: "https://github.com/joshborseth/movie-db",
    description:
      "Movie Database created using the TMDB API and the T3 Stack. A stack that allows for end-to-end full stack type safety. The Movie Database displays Upcoming, Now Playing, Popular, and Top Rated Movies by fetching data from the TMDB API. The database portion of the application saves the users' favourites. This is so a user can refer back to their curated list at a later time.",
    learned:
      "This was my first full stack application. I used the T3 Stack to create the application. I found this stack through one of my favourite tech influencers. His name is Theo. I loved using this stack because it allowed me to create a full stack application with end-to-end type safety. However, I did find that the stack didn't do too well with 3rd party APIs. This is due to the tightly coupled nature that tRPC provides. This was more of an error on my part more than the stack itself. I should've chosen a different API solution so that I didn't run into this issue of the REST API being incompatible with my tRPC API.",
    tech: [
      { src: "../nextjs.svg", alt: "Next.js Icon." },
      { src: "../typescript.svg", alt: "Typescript Icon." },
      { src: "../tailwind.svg", alt: "Tailwind Icon." },
    ],
  },
  {
    slug: "chess",
    title: "Chess Game",
    date: new Date("2022-06-08"),
    projectPic: "../chess.jpg",
    projectPicAlt: "Chess Game Screenshot.",
    codePic: "../chess-code.png",
    codePicAlt: "Chess Game Code Screenshot.",
    liveLink: "https://chess.joshborseth.com/",
    githubLink: "https://github.com/joshborseth/chess",
    description:
      "Chess game created using vanilla javascript. The game is fully playable with two players, and uses no external libraries. This project was all about getting better at Javascript specifically. I really felt like this project alone helped me go from a beginner in Javascript, to being much more comfortable with the language.",
    learned:
      "I learned a lot about Javascript and how to use it to write DRY code. Now that I look back at this project, I realize so much of it can be refactored so that I'm not repeating myself so frequently. I say that I learned this, because I believe that we learn things through making mistakes. I also embarassingly learned that writing conditional statements based on image paths is a very bad idea due to the fact that they are not always consistent. I would still say I'm super proud of this project because of how much functionality I was able to get working with vanilla Javascript.",
    tech: [
      {
        src: "../javascript.svg",
        alt: "Javascript Icon.",
      },
    ],
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    date: new Date("2022-10-22"),
    projectPic: "../portfolio.jpg",
    projectPicAlt: "Portfolio Website Screenshot.",
    codePic: "../portfolio-code.png",
    codePicAlt: "Portfolio Website Code Screenshot.",
    liveLink: "https://joshborseth.com/",
    githubLink: "https://github.com/joshborseth/portfolio-astro",
    description:
      "Portfolio website created using Astro. A project I created to showcase my skills and show I am eager to try new things and learn. I wanted to try out something new and Astro seemed like a great fit for my use case. I liked the idea of creating static sites that ship zero Javascript to the browser by default. It was also very nice that I was able to use React, Typescript, and Tailwind with Astro.",
    learned:
      "The main thing I learned while creating this website was Astro itself. It was interesting to try out a new techonology, and I had a blast doing so. I found that the dynamic routes were very interesting as the docs showed how to create dynamic routes using markdown files. I used a different method by just writing JSON and that seemed to work just fine. I wonder if there are downsides to this method? I've been thinking about refactoring this project to use markdown files instead of JSON since that is what the docs recommend.",
    tech: [
      {
        src: "../astro.svg",
        alt: "Astro Icon.",
        styleOverride: "p-2 bg-secondary w-20 scale-[.8] lg:scale-100 rounded",
      },
      { src: "../typescript.svg", alt: "Typescript Icon." },
      { src: "../tailwind.svg", alt: "Tailwind Icon." },
    ],
  },
  {
    slug: "randomizer",
    title: "Randomizer",
    date: new Date("2022-10-05"),
    projectPic: "../randomizer.jpg",
    projectPicAlt: "Randomizer Screenshot.",
    codePic: "../randomizer-code.png",
    codePicAlt: "Randomizer Code Screenshot.",
    liveLink: "https://randomizer.joshborseth.com/",
    githubLink: "https://github.com/joshborseth/randomizer",
    description:
      "Simple Randomizer application created using React, Typescript, and Framer Motion. This project was created to help showcase some of my skills. It was important to me that this application showcased both my skills in handling form inputs, and my skills in making animations with Framer Motion.",
    learned:
      "I learned a lot from building this application. I was definitely difficult generating new inputs programmatically with React. It was even more difficult to get the data from the inputs to be stored in an organized matter. Another difficulty was accounting for all the edge cases, and making sure that the application was as bug free as possible. In the end, I'd say I tackled all these problems and learned a lot in doing so.",
    tech: [
      {
        src: "../framer.svg",
        alt: "Framer Motion Icon.",
        styleOverride: "w-40 bg-secondary rounded",
      },
      { src: "../typescript.svg", alt: "Typescript Icon." },
      { src: "../tailwind.svg", alt: "Tailwind Icon." },
    ],
  },
];
