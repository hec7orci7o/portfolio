import Image from 'next/image'

export default function Card1 ({ img, title, description }) {
  return (
    <>
      <div className="h-72 sm:h-60 xl:h-72 w-full relative cursor-pointer">
        <Image
          src={img}
          alt="Picture of the author"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-sans font-bold text-lg uppercase select-none">
          {title}
        </h2>
        <p className="font-sans font-normal text-base select-none">
          {description}
        </p>
      </div>
    </>
  )
}
