type Props = {
  img: string;
  imgAlt: string;
  title: string;
  description: string;
};

const ProjectArticle = (props: Props) => {
  return (
    <article className="lg:grid grid-cols-2 gap-10 w-5/6 flex flex-col">
      <img src={props.img} alt={props.imgAlt} className="border-secondary border-2 rounded" />
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl lg:text-4xl">{props.title}</h2>
        <p className="font-light">{props.description}</p>
        <div className="flex flex-wrap w-full lg:w-1/2 gap-5">
          <button className="flex-1 lg:flex-none">Live</button>
          <button className="flex-1 lg:flex-none">Github</button>
          <button className="w-full bg-accent text-secondary">See More</button>
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
