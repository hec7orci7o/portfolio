import Image from "next/image";

export default function Card1({ src, img, title, description }) {
  return (
    <>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="h-72 sm:h-60 xl:h-72 w-full relative"
      >
        <Image
          src={img}
          alt="Picture of the author"
          layout="fill"
          className="object-cover"
        />
      </a>
      <div>
        <h2 className="font-sans font-bold text-lg uppercase">{title}</h2>
        <p className="font-sans font-normal text-base">{description}</p>
      </div>
    </>
  );
}
