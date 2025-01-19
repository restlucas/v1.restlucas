export function Header() {
  return (
    <header className="absolute top-0 w-full h-[10vh] px-[50px] flex items-center justify-center font-SFMono">
      <nav className="w-full flex items-center justify-between">
        <a href="" className="font-bold text-3xl text-blue-vibrant">
          restlucas
        </a>

        <div className="flex items-center justify-end gap-8 text-[13px]">
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
      </nav>
    </header>
  );
}
