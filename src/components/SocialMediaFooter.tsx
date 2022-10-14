import Email from "/email.svg";
import Twitter from "/twitter.svg";
import Github from "/github.svg";
import LinkedIn from "/linkedin.svg";

const SocialMediaFooter = () => {
  return (
    <footer className="bg-accent fixed bottom-0 w-screen">
      <ul className="flex justify-center items-center">
        <li>
          <img src={LinkedIn} alt="LinkedIn Icon" />
        </li>
        <li>
          <img src={Github} alt="Github Icon" />
        </li>
        <li>
          <img src={Twitter} alt="Twitter Icon" />
        </li>
        <li>
          <img src={Email} alt="Email Icon" />
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;
