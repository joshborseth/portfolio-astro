type Props = {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
  live?:string;
  github:string;
  indiv:string;
};

const ProjectArticle = (props: Props) => {
  return (
    <article className="lg:grid grid-cols-2 gap-10 w-5/6 flex flex-col">
      <img src={props.img} alt={props.imgAlt} className="border-secondary border-2 rounded" />
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl lg:text-4xl">{props.title}</h2>
        <p className="font-light">{props.description}</p>
        <div className="flex flex-wrap w-full lg:w-1/2 gap-5 text-center">
          {props.live && <a href={props.live}className="block flex-1 lg:flex-none bg-secondary text-primary font-bold py-2 px-4 rounded">Live</a>}
          <a href={props.github} className="block flex-1 lg:flex-none bg-secondary text-primary font-bold py-2 px-4 rounded">Github</a>
          <a href={props.indiv} className="w-full bg-accent text-secondary bg-accent font-bold py-2 px-4 rounded">See More</a>
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
