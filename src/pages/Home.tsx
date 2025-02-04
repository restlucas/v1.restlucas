import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  animationClasses?: string;
}

const AnimatedElement = ({
  children,
  animationClasses = "",
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? animationClasses : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
};

export function Home() {
  return (
    <>
      {/* Presentation */}
      <section className="min-h-screen flex items-center justify-center max-w-[1000px]">
        <AnimatedElement animationClasses="opacity-100 translate-y-0">
          <div className="w-full flex flex-col items-start justify-center gap-4 px-8 lg:px-0 lg:mx-8">
            <h1 className="font-SFMono text-sm text-blue-vibrant">
              Hi, my name is
            </h1>
            <h2 className="text-7xl font-bold text-slate-200">
              Lucas Oliveira
            </h2>
            <h2 className="text-7xl font-bold text-slate-200">
              I'm a Front-end Developer
            </h2>
            <h3 className="w-full lg:w-1/2 text-xl">
              I build things for the web and I'm currently looking for a new
              challenge to relocate myself in the job market!
            </h3>
          </div>
        </AnimatedElement>
      </section>

      {/* About */}
      <section id="about" className="px-8 lg:py-[100px] mx-auto max-w-[1000px]">
        <div className="flex items-start justify-start gap-2 mb-6">
          <span className="font-SFMono text-blue-vibrant text-xl">01. </span>
          <h2 className="leading-9 font-bold text-3xl text-slate-200">About</h2>
        </div>
        <div className="space-y-8">
          <p className="leading-6 text-xl">
            Hello! My name is Lucas and I like to create visual things. My
            interest in web development began in 2018 when I enrolled in college
            to study systems analysis and development. While there, I was
            exposed to programming logic, data structures, web development and
            other subjects, and I began to become increasingly interested in the
            area.
          </p>

          <p className="leading-6 text-xl">
            I had the privilege of working at a software solutions company that
            served a government entity, a logistics company and a multinational
            IT services company that also served a government entity.
          </p>

          <p className="leading-6 text-xl">
            Here are some technologies I have been working with:
          </p>

          <ul className="list-none grid grid-cols-1 grid-rows-auto lg:grid-cols-3 lg:grid-rows-2 gap-2">
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./javascript.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">
                JavaScript (ES6+)
              </span>
            </li>
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./react.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">React</span>
            </li>
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./typescript.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">TypeScript</span>
            </li>
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./nextjs.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">Next.js</span>
            </li>
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./nodejs.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">Node.js</span>
            </li>
            <li className="flex items-center justify-start gap-4 p-4 border-px rounded-lg cursor-pointer border-transparent duration-200 hover:bg-secondary hover:border-tertiary group hover:text-blue-vibrant">
              <div className="grayscale group-hover:grayscale-0">
                <img src="./prisma.svg" className="w-10 h-10" />
              </div>
              <span className="flex-1 text-lg font-SFMono">Prisma</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="px-8 py-16 lg:mx-auto lg:py-[100px] max-w-[1000px]"
      >
        <div className="flex items-start justify-start gap-2 mb-6">
          <span className="font-SFMono text-blue-vibrant text-xl">02. </span>
          <h2 className="leading-9 font-bold text-3xl text-slate-200">
            Where I've Worked
          </h2>
        </div>
        <div className="">
          <ol className="relative border-s border-secondary">
            <li className="mb-10 ms-6 group duration-300 hover:text-blue-vibrant">
              <span className="absolute flex items-center justify-center w-3 h-3 bg-secondary rounded-full -start-1.5 duration-300 group-hover:bg-blue-vibrant" />
              <div className="flex items-center justify-start gap-4 mb-2">
                <h3 className="leading-tight text-xl">Software Developer 2</h3>
                <span className="text-xl text-blue-vibrant">@Sonda IT</span>
              </div>
              <span className="text-xs font-SFMono">
                January 2023 - July 2024 (1.5 yrs)
              </span>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Developed web applications using React, TypeScript,
                    Tailwind, React Hook Form and a bit of Laravel on the
                    back-end.
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Implemented clean code and refactoring practices, improving
                    maintainability and reducing errors
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Participation in SCRUM methodologies, including sprints,
                    plannings, and reviews.
                  </span>
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-6 group duration-300 hover:text-blue-vibrant">
              <span className="absolute flex items-center justify-center w-3 h-3 bg-secondary rounded-full -start-1.5 duration-300 group-hover:bg-blue-vibrant" />
              <div className="flex items-center justify-start gap-4 mb-2">
                <h3 className="leading-tight text-xl">Full-stack Developer</h3>
                <span className="text-xl text-blue-vibrant">@JSL S/A</span>
              </div>
              <span className="text-xs font-SFMono">
                July 2021 - January 2024 (1.6 yrs)
              </span>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Developed and maintained the main system using on the branch
                    using PHP, React, Semantic UI, jQuery, Apexcharts and other
                    libraries.
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Analysis, integration, and manipulation of data from
                    external APIs.
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Code versioning management and control, ensuring development
                    integrity and organization.
                  </span>
                </li>
              </ul>
            </li>
            <li className="mb-10 ms-6 group duration-300 hover:text-blue-vibrant">
              <span className="absolute flex items-center justify-center w-3 h-3 bg-secondary rounded-full -start-1.5 duration-300 group-hover:bg-blue-vibrant" />
              <div className="flex items-center justify-start gap-4 mb-2">
                <h3 className="leading-tight text-xl">
                  Junior Systems Analyst
                </h3>
                <span className="text-xl text-blue-vibrant">@Vert IT</span>
              </div>
              <span className="text-xs font-SFMono">
                June 2020 - September 2020 (0.3 yrs)
              </span>

              <ul className="mt-5 space-y-2">
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Development of modern and dynamic interfaces using React and
                    complementary libraries.
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Updating and optimizing existing systems, ensuring
                    performance and usability.
                  </span>
                </li>
                <li className="flex items-center justify-start gap-2 pl-7 relative">
                  <span className="before:content-['▹'] before:absolute before:left-0">
                    Maintenance and customization of CMS platforms, focusing on
                    Joomla, to meet the specific needs of projects.
                  </span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 lg:px-0 py-14 lg:mx-auto lg:py-[100px] max-w-[1000px]"
      >
        <AnimatedElement animationClasses="opacity-100 translate-y-0">
          <div className="flex items-start justify-start gap-2 mb-6">
            <span className="font-SFMono text-blue-vibrant text-xl">03. </span>
            <h2 className="leading-9 font-bold text-3xl text-slate-200">
              Some Things I've Built
            </h2>
          </div>

          <div className="w-full flex flex-col gap-32">
            {/* What's New */}
            <div className="relative">
              <div className="block lg:hidden">
                <a
                  target="_blank"
                  href="https://whats-new-rust.vercel.app/"
                  className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                >
                  What's New
                </a>
                <a target="_blank" href="https://whats-new-rust.vercel.app/">
                  <img
                    src="./whatsnew.png"
                    className="rounded-t-md lg:rounded-t-none lg:rounded-md grayscale duration-300 hover:grayscale-0 w-full h-auto"
                  />
                </a>
                <div className="p-6 bg-secondary rounded-b-md w-full lg:w-[550px] shadow-lg">
                  The news system allows reading, creating, editing, and
                  deleting news articles, organized by teams. Each team manages
                  its members and can invite new ones. Statistics include like
                  rate, views, most popular news, and top contributors.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm">
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    React
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Vite
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Zod
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TypeScript
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    React Query
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Node
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TailwindCSS
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Prisma
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Firebase
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    API Rest
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Nodemailer
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    JWT Authentication
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Theme toggle
                  </span>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2">
                <div className="h-full flex flex-col items-start justify-center absolute z-10 left-10 top-0 bottom-0">
                  <a
                    target="_blank"
                    href="https://whats-new-rust.vercel.app/"
                    className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                  >
                    What's New
                  </a>
                  <div className="p-6 bg-secondary rounded-md w-[550px] shadow-lg">
                    The news system allows reading, creating, editing, and
                    deleting news articles, organized by teams. Each team
                    manages its members and can invite new ones. Statistics
                    include like rate, views, most popular news, and top
                    contributors.
                  </div>
                  <div className="max-w-[550px] flex flex-wrap items-center justify-start gap-4 mt-4 text-sm">
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      React
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Vite
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Zod
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TypeScript
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      React Query
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Node
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TailwindCSS
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Prisma
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Firebase
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      API Rest
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Nodemailer
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      JWT Authentication
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Theme toggle
                    </span>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://whats-new-rust.vercel.app/"
                  className="lg:col-start-2"
                >
                  <img
                    src="./whatsnew.png"
                    className="h-full w-full rounded-md grayscale duration-300 hover:grayscale-0"
                  />
                </a>
              </div>
            </div>

            {/* Couplespace */}
            <div className="relative">
              <div className="block lg:hidden">
                <a
                  target="_blank"
                  href="https://couplespace.vercel.app/"
                  className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                >
                  Couplespace
                </a>
                <a target="_blank" href="https://couplespace.vercel.app/">
                  <img
                    src="./couplespace.png"
                    className="rounded-t-md lg:rounded-t-none lg:rounded-md grayscale duration-300 hover:grayscale-0 w-full h-auto"
                  />
                </a>
                <div className="p-6 bg-secondary rounded-b-md w-full lg:w-[550px] shadow-lg">
                  A web app for couples to show their love. Make declarations
                  with words, images and videos. Make login with your Google
                  account and receive, create and receive a QR Code for your own
                  page.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm">
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Next.js
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TypeScript
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TailwindCSS
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Next-Auth
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Zod
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Prisma
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Firebase
                  </span>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2">
                <a target="_blank" href="https://couplespace.vercel.app/">
                  <img
                    src="./couplespace.png"
                    className="h-full w-full rounded-md grayscale duration-300 hover:grayscale-0"
                  />
                </a>
                <div className="h-full flex flex-col items-end justify-center static lg:absolute right-10 top-0 bottom-0">
                  <a
                    target="_blank"
                    href="https://couplespace.vercel.app/"
                    className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                  >
                    Couplespace
                  </a>
                  <div className="p-6 bg-secondary rounded-md w-full lg:w-[550px] shadow-lg">
                    A web app for couples to show their love. Make declarations
                    with words, images and videos. Make login with your Google
                    account and receive, create and receive a QR Code for your
                    own page.
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-4 mt-4 text-sm">
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Next.js
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TypeScript
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TailwindCSS
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Next-Auth
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Zod
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Prisma
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Firebase
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bookly */}
            <div className="relative">
              <div className="block lg:hidden">
                <a
                  target="_blank"
                  href="https://bookly-azure.vercel.app/"
                  className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                >
                  Bookly
                </a>
                <a target="_blank" href="https://bookly-azure.vercel.app/">
                  <img
                    src="./bookly.png"
                    className="rounded-t-md lg:rounded-t-none lg:rounded-md grayscale duration-300 hover:grayscale-0 w-full h-auto"
                  />
                </a>
                <div className="p-6 bg-secondary rounded-b-md w-full lg:w-[550px] shadow-lg">
                  A general appointment scheduling web app for both consumers
                  and professionals. As a professional, organize your
                  appointments and manage your appointments. As a consumer, find
                  professionals, request appointments and make reviews.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm">
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Next.js
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TypeScript
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TailwindCSS
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Next-Auth
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    React Query
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Axios
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Prisma
                  </span>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2">
                <div className="h-full flex flex-col items-start justify-center absolute z-10 left-10 top-0 bottom-0">
                  <a
                    target="_blank"
                    href="https://bookly-azure.vercel.app/"
                    className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                  >
                    Bookly
                  </a>
                  <div className="p-6 bg-secondary rounded-md w-[550px] shadow-lg">
                    A general appointment scheduling web app for both consumers
                    and professionals. As a professional, organize your
                    appointments and manage your appointments. As a consumer,
                    find professionals, request appointments and make reviews.
                  </div>
                  <div className="flex flex-wrap items-center justify-start gap-4 mt-4 text-sm">
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Next.js
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TypeScript
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TailwindCSS
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Next-Auth
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      React Query
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Axios
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Prisma
                    </span>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://bookly-azure.vercel.app/"
                  className="lg:col-start-2"
                >
                  <img
                    src="./bookly.png"
                    className="h-full w-full rounded-md grayscale duration-300 hover:grayscale-0"
                  />
                </a>
              </div>
            </div>

            {/* Mumair portfolio */}
            <div className="relative">
              <div className="block lg:hidden">
                <a
                  target="_blank"
                  href="https://mumair-portfolio-beta.vercel.app/"
                  className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                >
                  Mumair Portfolio
                </a>
                <a
                  target="_blank"
                  href="https://mumair-portfolio-beta.vercel.app/"
                >
                  <img
                    src="./mumair-portfolio.png"
                    className="rounded-t-md lg:rounded-t-none lg:rounded-md grayscale duration-300 hover:grayscale-0 w-full h-auto"
                  />
                </a>
                <div className="p-6 bg-secondary rounded-b-md w-full lg:w-[550px] shadow-lg">
                  A simple portfolio landing page develop to improve my
                  Styled-Components knowledge.
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-sm">
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Next.js
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    TypeScript
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Styled-Components
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Mobile Friendly
                  </span>
                  <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                    Dark Light Theme
                  </span>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2">
                <a
                  target="_blank"
                  href="https://mumair-portfolio-beta.vercel.app/"
                >
                  <img
                    src="./mumair-portfolio.png"
                    className="h-full w-full rounded-md grayscale duration-300 hover:grayscale-0"
                  />
                </a>
                <div className="h-full flex flex-col items-end justify-center static lg:absolute right-10 top-0 bottom-0">
                  <a
                    target="_blank"
                    href="https://mumair-portfolio-beta.vercel.app/"
                    className="text-2xl font-bold duration-300 hover:text-blue-vibrant"
                  >
                    Mumair Portfolio
                  </a>
                  <div className="p-6 bg-secondary rounded-md w-full lg:w-[550px] shadow-lg">
                    A simple portfolio landing page develop to improve my
                    Styled-Components knowledge.
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-4 mt-4 text-sm">
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Next.js
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      TypeScript
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Styled-Components
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Mobile Friendly
                    </span>
                    <span className="duration-300 hover:text-blue-vibrant cursor-pointer">
                      Dark Light Theme
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <p className="w-full lg:w-1/2 mt-32 py-4 rounded-md border-2 border-dashed border-secondary bg-secondary/25 text-center shadow-lg font-bold font-SFMono">
              more coming up!
            </p>
          </div>
        </AnimatedElement>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 lg:px-0 lg:mx-auto max-w-[600px]">
        <AnimatedElement animationClasses="opacity-100 translate-y-0">
          <div className=" h-[80vh] flex flex-col items-center justify-center gap-8 text-center">
            <span className="font-SFMono text-blue-vibrant text-xl">
              04. What's Next?
            </span>
            <h2 className="font-bold text-7xl text-slate-200">Get in Touch</h2>
            <p className="text-xl">
              I'm currently looking for a new opportunity, so my email inbox is
              always open. If you have any questions or just want to say hi,
              I'll do my best to answer!
            </p>

            <a
              href="mailto:restlucas.dev@gmail.com"
              className="transition ease-in-out rounded-md py-4 px-6 border-2 border-blue-vibrant text-blue-vibrant duration-300 hover:bg-blue-vibrant hover:text-background hover:scale-110 hover:-skew-y-2"
            >
              Say Hello
            </a>
          </div>
        </AnimatedElement>
      </section>
    </>
  );
}
