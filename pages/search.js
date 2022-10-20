import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchCard from "../components/SearchCard";
import { useRouter } from "next/router";
import { format } from 'date-fns';


function Search( { searchResults } ) {

    const router = useRouter();

    const {location, startDate, endDate, noOfGuests } = router.query;

    const formattedStartDate =  format(new Date(startDate), 'dd MMM yy');
    const formattedEndDate =  format(new Date(endDate), 'dd MMM yy');
    const range = `${formattedStartDate} Até ${formattedEndDate}`;

  return (
    <div className="">

        {/* Header */}
        <Header 
            placeholder={`${location} | ${range} | ${noOfGuests} Pessoas`}
        />

        <main className="flex">
            {/* Left Section */}
            <section className="flex-grow pt-8 md:pt-10 px-6">
                <h1 className="text-3xl mb-3 font-semibold md:mt-2 md:mb-2 ">Fique em {location}</h1>
                
                <p className="text-sm lg:text-lg font-semibold mb-6">300+ Opções para o período de {range} para {noOfGuests} {noOfGuests > 1 ? 'pessoas' : 'pessoa'}</p>
                
                <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                    <p className="btnSearchPage">Cancelamento Flexível</p>
                    <p className="btnSearchPage">Tipo de Lugar</p>
                    <p className="btnSearchPage">Preço</p>
                    <p className="btnSearchPage">Quartos e Camas</p>
                    <p className="btnSearchPage">Mais Filtros</p>
                </div>

                {/* Mapping Data */}
                <div className="flex flex-col ">
                    {searchResults.map(({description, img, location, price, star, title, total}) => (
                        <SearchCard
                            key={img}
                            description={description} 
                            img={img}
                            location={location} 
                            price={price}
                            star={star}
                            title={title} 
                            total={total}
                        />
                    ))}
                </div>
            </section>

            {/* Right Section */}

            
        </main>

        <Footer />
    </div>
  )
}

export default Search;



// Pulling data from the server
export async function getServerSideProps(context) {

    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS')
    .then(res => res.json()) 

    return {
        props: {
            searchResults,
        }
    }
} 