import checkmark from "../assets/checkmark.png";

const TechSkillsItem = ({ category, technologies }) => {
  return (
    <div className="mb-2 rounded-md pt-2 px-2 h-fit">
      <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-1">
        {category}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {" "}
        {technologies.map((tech, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center">
              <img src={checkmark} className="w-6 dark:hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 hidden dark:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <p className="ml-2 my-2 text-base font-normal text-stone-500 dark:text-stone-400">
                {tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkillsItem;
