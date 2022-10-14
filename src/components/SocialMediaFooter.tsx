import Email from "/email.svg";
import Twitter from "/twitter.svg";
import Github from "/github.svg";
import LinkedIn from "/linkedin.svg";
import SocialLink from "../components/SocialLink";
const SocialMediaFooter = () => {
  return (
    <footer className="fixed z-50 bottom-0 h-24 w-full lg:w-1/2 transform -translate-x-1/2 left-1/2 bg-accent rounded-2xl">
      <ul className="flex justify-around items-center h-full">
        <li>
          <SocialLink src={LinkedIn} alt="LinkedIn Icon" />
        </li>
        <li>
          <SocialLink src={Twitter} alt="Twitter Icon" />
        </li>
        <li>
          <SocialLink src={Github} alt="Github Icon" />
        </li>
        <li>
          <SocialLink src={Email} alt="Email Icon" />
        </li>
      </ul>
    </footer>
  );
};

export default SocialMediaFooter;
