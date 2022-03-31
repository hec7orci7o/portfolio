import Link from "next/link";
import { useRouter } from "next/router";
import FiXmod from "./FiXmod";

export default function Navbar({ children }) {
  const router = useRouter();

  return (
    <div className="container mx-auto flex justify-between py-3 px-4">
      <div className="flex gap-10 md:gap-16 lg:gap-20 mx-auto sm:mx-0">
        <div className="col-start-2 col-span-2 hidden sm:flex flex-col">
          <span className="font-sans font-medium text-sm">Hector Toral</span>
          <span className="font-sans font-medium text-sm">©2022</span>
        </div>
        <div className="col-start-4 col-span-1 flex flex-col gap-y-1">
          {[
            { src: "/about", name: "About" },
            { src: "/articles", name: "Articles" },
          ].map((i, index) => (
            <div key={index} className="flex items-center relative">
              <Link href={i.src}>
                <a
                  className={`font-sans font-bold text-sm uppercase 
                ${router.asPath !== i.src && "opacity-80 hover:opacity-100"}`}
                >
                  {i.name}
                </a>
              </Link>
              {router.asPath === i.src && (
                <FiXmod className="w-4 h-4 absolute left-0 -ml-5" />
              )}
            </div>
          ))}
        </div>
        <div className="col-start-5 col-span-1 flex flex-col gap-y-1">
          {[
            { src: "/featured", name: "Featured" },
            { src: "/latest", name: "Latest" },
            { src: "/all", name: "All Work" },
          ].map((i, index) => (
            <div key={index} className="flex items-center relative">
              <Link href={i.src}>
                <a
                  className={`font-sans font-bold text-sm uppercase
                ${router.asPath !== i.src && "opacity-50 hover:opacity-100"}`}
                >
                  {i.name}
                </a>
              </Link>
              {router.asPath === i.src && (
                <FiXmod className="w-4 h-4 absolute left-0 -ml-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="col-start-11 col-span-2 hidden sm:flex flex-col gap-y-1">
        {[
          { src: "https://github.com/hec7orci7o", name: "Github" },
          { src: "https://www.linkedin.com/in/hec7or/", name: "Linkedin" },
          { src: "mailto:contact@hec7or.me", name: "Mail" },
        ].map((i, index) => (
          <div key={index}>
            <a
              href={i.src}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-bold text-sm uppercase opacity-50 hover:opacity-100"
            >
              {i.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
