import { List, X } from "@phosphor-icons/react";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="absolute top-0 w-screen h-[10vh] px-[25px] lg:px-[50px] flex items-center justify-center font-SFMono">
        <nav className="w-full flex items-center justify-between">
          <a href="" className="font-bold text-3xl text-blue-vibrant">
            restlucas
          </a>

          <div className="hidden lg:flex items-center justify-end gap-8 text-[13px]">
            <ol className="list-none flex items-center justify-end gap-10">
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#about">
                  <span className="mr-2 text-blue-vibrant">01.</span>
                  <span>About</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#experience">
                  <span className="mr-2 text-blue-vibrant">02.</span>
                  <span>Experience</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#projects">
                  <span className="mr-2 text-blue-vibrant">03.</span>
                  <span>Projects</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#contact">
                  <span className="mr-2 text-blue-vibrant">04.</span>
                  <span>Contact</span>
                </a>
              </li>
            </ol>
            <a
              target="_blank"
              href="./resume.pdf"
              className="transition ease-in-out rounded-md py-2 px-4 border-2 border-blue-vibrant text-blue-vibrant duration-300 hover:bg-blue-vibrant hover:text-background hover:scale-110 hover:-skew-y-2"
            >
              Resume
            </a>
          </div>

          <div className="flex lg:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              <List size={28} />
            </button>
          </div>
        </nav>
      </header>

      {showMenu && (
        <div className="z-50 fixed top-0 bottom-0 right-0 left-0 bg-black/80 flex items-start- justify-end">
          <div className="h-screen w-2/3 bg-secondary p-4 flex flex-col items-start justify-center relative">
            <button
              onClick={() => setShowMenu(false)}
              className="absolute top-4 left-2 p-2 rounded-md"
            >
              <X size={28} />
            </button>
            <ol className="list-none flex flex-col items-start justify-center gap-10 mb-10">
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#about" onClick={() => setShowMenu(false)}>
                  <span className="mr-2 text-blue-vibrant">01.</span>
                  <span>About</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#experience" onClick={() => setShowMenu(false)}>
                  <span className="mr-2 text-blue-vibrant">02.</span>
                  <span>Experience</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#projects" onClick={() => setShowMenu(false)}>
                  <span className="mr-2 text-blue-vibrant">03.</span>
                  <span>Projects</span>
                </a>
              </li>
              <li className="flex items-center duration-200 hover:text-blue-vibrant">
                <a href="#contact" onClick={() => setShowMenu(false)}>
                  <span className="mr-2 text-blue-vibrant">04.</span>
                  <span>Contact</span>
                </a>
              </li>
            </ol>
            <a
              target="_blank"
              href="./resume.pdf"
              className="rounded-md py-2 border-2 w-full flex items-center justify-center border-blue-vibrant text-blue-vibrant duration-300 hover:bg-blue-vibrant hover:text-background"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}
