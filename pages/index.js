import Head from 'next/head'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard';
import MediumCard from '@/components/MediumCard';
import LargeCard from '@/components/LargeCard';
import Footer from '@/components/Footer';



export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Airboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />


      <main className='max-w-7xl mx-auto px-8 sm:px-16'>


        <section className='border mt-10 shadow-lg rounded-xl pb-5'>
          <h2 className='text-4xl font-semibold pt-5 pb-5 pl-3 md:pl-5 '>
            Explore Nearby
          </h2>

         {/* Pull some data from a server - API endpoints */}
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {exploreData?.map(({img, location, distance}) => (
              <SmallCard key={img} 
              img={img}
              location={location} 
              distance={distance}   
              />
            ))}
         </div>
        </section>


       <section className='border mt-10 shadow-lg rounded-xl'>
        <h2 className='text-4xl font-semibold py-4 pl-3 md:pl-5'> 
          Live Anywhere
        </h2>
           <div className="flex space-x-3 overflow-scroll scrollbar-hide p-4 -ml-2">
           {cardsData?.map(({img, title}) => (
            <MediumCard key={img}
            img={img}
            title={title}
             />
        ))}
           </div> 
       </section>


        <LargeCard 
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
     
    </div>
  );
}

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}