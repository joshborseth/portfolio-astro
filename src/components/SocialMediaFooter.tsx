import Email from "/email.svg";
import Twitter from "/twitter.svg";
import Github from "/github.svg";
import LinkedIn from "/linkedin.svg";
const SocialMediaFooter = () => {
  return (
    <footer className="fixed bottom-0 h-24 w-full lg:w-1/2 transform -translate-x-1/2 left-1/2 bg-accent rounded-2xl">
      <ul className="flex justify-around items-center h-full">
        <li>
          <a href="#">
            <img src={LinkedIn} alt="LinkedIn Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Github} alt="Github Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} alt="Twitter Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Email} alt="Email Icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;
