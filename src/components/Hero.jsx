import CV from "../assets/Marinna-CV.pdf";

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-stone-200 mb-1 md:mb-3 font-bold">
        Marinna Pereira
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Full Stack Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        As a full-stack developer, I'm meticulously sculpting my unique digital
        domain, brick by brick. Every project begins with strategic planning and
        design, paving the way to confront tangible challenges head-on with
        innovative code solutions.
        <br />
        Creating cutting-edge digital experiences is a passion of mine, and I'm
        thrilled to build engaging and intuitive web applications.
      </p>
      <a download={""} href={CV} className="flex gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
          <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
        </svg>

        <span className="font-bold text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600">
          CV
        </span>
      </a>
    </div>
  );
};

export default Hero;
