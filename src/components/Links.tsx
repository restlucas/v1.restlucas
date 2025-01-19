import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Links() {
  return (
    <div className="block lg:fixed left-10 bottom-0 z-10 flex lg:flex-col items-center justify-center gap-4">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/restlucas"
        className=" p-2 rounded-md duration-300 hover:bg-secondary group"
      >
        <LinkedinLogo
          size={26}
          className="duration-300 group-hover:fill-blue-vibrant"
        />
      </a>
      <a
        target="_blank"
        href="https://github.com/restlucas"
        className=" p-2 rounded-md duration-300 hover:bg-secondary group"
      >
        <GithubLogo
          size={26}
          className="duration-300 group-hover:fill-blue-vibrant"
        />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/rest.lucas/"
        className=" p-2 rounded-md duration-300 hover:bg-secondary group"
      >
        <InstagramLogo
          size={26}
          className="duration-300 group-hover:fill-blue-vibrant"
        />
      </a>
      <div className="hidden lg:block w-px h-[90px] bg-blue-vibrant" />
    </div>
  );
}
