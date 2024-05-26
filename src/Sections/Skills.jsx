import AddSkills from "../Components/AddSkill";
import htmlLogo from "../assets/Html logo.png";
import CSSLogo from "../assets/CSS logo.png";
import JSLogo from "../assets/JS logo.png";
import reactLogo from "../assets/react logo.svg";
import gitLogo from "../assets/Git Logo.png";
import antdLogo from "../assets/ant-design.svg";
import reduxLogo from "../assets/Redux.png";
import illustratorLogo from "../assets/Illustrator logo.png";

export default function Skills() {
  const programmingSkills = [
    [htmlLogo, "HTML"],
    [CSSLogo, "CSS"],
    [JSLogo, "JS"],
    [reactLogo, "React"],
  ];
  const toolSkills = [
    [gitLogo, "Git"],
    [antdLogo, "Ant Design"],
    [reduxLogo, "Redux"],
    [illustratorLogo, "Adobe Illustrator"],
  ];
  return (
    <>
      <div id="skills">
        <h1>My Skills</h1>
        <h2>Programming Languages</h2>
        <div class="skill">
          {programmingSkills.map((skill) => (
            <AddSkills image={skill[0]} skill={skill[1]} />
          ))}
        </div>
        <h2>Tools</h2>
        <div class="skill">
          {toolSkills.map((skill) => (
            <AddSkills image={skill[0]} skill={skill[1]} />
          ))}
        </div>
      </div>
    </>
  );
}
