const Project = ({ title, imgUrl, stack, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-stone-900 dark:border-stone-200 rounded-md overflow-hidden w-[315px]"
    >
      <img
        src={imgUrl}
        alt="project"
        className="w-full h-36 md:h-44 object-cover cursor-pointer object-top"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-stone-200 mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-stone-200">
          {stack.map((item, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-200 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};

export default Project;
