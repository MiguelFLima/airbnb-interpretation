import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>Aluguéis de Condomínio e Casas de Veraneio - Airbnb</title>
        <link rel="icon" href="iconelogo.svg" />
      </Head>

      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* Explore Nearby */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore por perto!</h2>

          {/* Rendering information pulled from the server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        {/* Live Anywhere */}
        <section>
          <h2 className="text-4xl font-semibold py-8">Viva onde quiser!</h2>
          {/* Rendering information pulled from the server */}
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        {/* Large Card */}
        <section>
              <LargeCard
                img='https://links.papareact.com/4cj'
                title='The Greatest Outdoors'
                description='Wishlists curated by Airbnb'
                buttonText='Get Inspired'
              />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

// Pulling information
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
