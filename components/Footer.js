
function Footer() {
  return (
    <div className="lg:h-16 h-20 bg-gray-200">
        <div className=" flex lg:space-x-28 space-x-6 h-[100%] items-center justify-center text-sm lg:text-lg flex-wrap text-black px-2">
            <p className="cursor-pointer hover:border-b-2 border-black hover:scale-105 transition duration-150 ">Como a Airbnb funciona</p>
            <p className="cursor-pointer hover:border-b-2 border-black hover:scale-105 transition duration-150 ">Novidades</p>
            <p className="cursor-pointer hover:border-b-2 border-black hover:scale-105 transition duration-150 ">Investidores</p>
            <p className="cursor-pointer hover:border-b-2 border-black hover:scale-105 transition duration-150 ">Airbnb Plus</p>
            <p className="cursor-pointer hover:border-b-2 border-black hover:scale-105 transition duration-150 ">Airbnb Luxo</p>
        </div>
    </div>
  )
}

export default Footer