import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData,cardData }) {
  return (
  <div>
    {/* Header */}
       <Header />
    {/* Banner */}
    <Banner/>
<main className='max-w-7xl mx-auto px-8 sm:px-16'>
  <section className='pt-6'>
    <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
    {/* Pull some data from a server -API endpoints */}
   <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {exploreData?.map(({img,distance,location})=>(
      <SmallCard
      key={img}
       img={img} 
       distance={distance}
       location={location}

      />
    ))}

   </div>
  </section>
  <section>
    <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
   <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
    {cardData?.map(({title,img})=>
      <MediumCard 
      key={img}
      img={img} 
      title={title}
       />
    )}

   </div>
  </section>
  <div>
    <LargeCard
    img="https://links.papareact.com/4cj"
    title="The Greatest Outdoors"
    description="Wishlists curated by Airbnb"
    buttonText="Get inspired"/>
  </div>
</main>
  <Footer/>
  </div>
  )
}
export async function getStaticProps(){
  const exploreData=await fetch('https://www.jsonkeeper.com/b/4G1G').
  then(
    (res)=> res.json()
  );
  const cardData=await fetch('https://www.jsonkeeper.com/b/VHHT').
  then(
    (res)=> res.json()
  );
  return{
    props:{
      exploreData,
      cardData
    }
  }
}