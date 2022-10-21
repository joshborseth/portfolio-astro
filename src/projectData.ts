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
    liveLink: "#",
    githubLink: "#",
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
];
