import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function SearchCard({ description, img, location, price, star, title, total }) {
  return (
    <div className="flex py-7 px-2 border-b hover:opacity-80 cursor-pointer hover:shadow-lg transitio duration-200 ease-out first:border-t active:scale-95">
      {/* Image */}
      <div className="relative w-40 h-24 md:w-80 md:h-52 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Aside Image */}

      {/* 3 Lines & Heart Icon */}
      <div className="flex flex-col space-y-2 flex-grow pl-4">
        <div className="flex justify-between items-center">
          <p className="text-base md:text-2xl font-semibold">{title}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xs md:text-xl text-gray-500">{location}</h4>
        <p className="text-xs md:text-base text-gray-500 flex-grow">
          {description}
        </p>

        {/* Stars & Price */}
        <div className="flex items-end justify-between pt-5">
            <p className="flex items-center md:text-base">
            <StarIcon className="h-5 text-red-400" />
            {star}
            </p>

            <div className="">
                <p className="font-bold text-lg lg:text-2xl">{price}</p>
                <p className="lg:text-xl text-right font-extralight">{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
