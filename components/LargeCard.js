import Image from "next/image";


function LargeCard( { img, title, description, buttonText } ) {
  return (
    <section className="relative py-16">
        {/* Image */}
        <div className="relative h-96 min-w-[300px]">
            <Image 
                className="rounded-2xl"
                src={img}
                layout="fill"
                objectFit="cover"
            />
        </div>

        {/* Text */}
        <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>

            <button className="text-sm text-white bg-gray-900 px-4 py-2 mt-5 rounded-lg cursor-pointer hover:bg-black hover:scale-105 transition transform duration-150 active:scale-110 active:text-green-400 ease-out">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard