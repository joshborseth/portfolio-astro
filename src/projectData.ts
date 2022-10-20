interface projectDataType {
  slug: string;
  title: string;
  projectPic: string;
  projectPicAlt: string;
  codePic: string;
  codePicAlt: string;
  liveLink: string;
  githubLink: string;
  description: string;
  learned: string;
  tech: string[];
}

export const data: projectDataType[] = [
  {
    slug: "movie-db",
    title: "Movie Database",
    projectPic: "movie-db.png",
    projectPicAlt: "Movie Database Screenshot.",
    codePic: "movie-db-code.png",
    codePicAlt: "Movie Database Code Screenshot.",
    liveLink: "#",
    githubLink: "#",
    description:
      "Movie Database created using the TMDB API and the T3 Stack. A stack that allows for end-to-end fullstack typesafety.",
    learned:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime tempore voluptas, repellat vel facilis nemo suscipit minima explicabo voluptatum non itaque modi velit? Possimus ut quidem aut autem quaerat, esse placeat dolorum pariatur repellat in? Quaerat autem, assumenda quidem, voluptates alias voluptatibus nesciunt est sapiente facilis laborum amet rem dignissimos ipsam recusandae, voluptatum qui quae ullam laudantium saepe architecto. Excepturi distinctio similique blanditiis esse quisquam recusandae, ab asperiores velit earum eos qui fugiat expedita aut iure quo, provident nam? Labore, deleniti amet? Alias amet mollitia reiciendis distinctio eveniet culpa praesentium, odio commodi fugit dicta iste vitae voluptatum, voluptas enim.",
    tech: ["nextjs.svg", "typescript.svg", "tailwind.svg", "trpc.svg"],
  },
];
