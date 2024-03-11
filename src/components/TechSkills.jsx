import Title from "./Title";
import techSkills from "../data/techSkills";
import TechSkillsItem from "./TechSkillsItem";

const TechSkills = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center my-20">
        <div className="w-full md:w-7/12 ">
          <Title>Tech Skills</Title>
          <div className="border-2 rounded-md dark:border-stone-200 p-1">
            {techSkills.map((stack, i) => (
              <TechSkillsItem
                key={i}
                category={stack.category}
                technologies={stack.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechSkills;
