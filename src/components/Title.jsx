function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-stone-200"
    >
      {children}
    </h1>
  );
}

export default Title;