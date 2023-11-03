import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfosCard from '@/components/InfosCard'
import Mapa from '@/components/Mapa'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'

const search = ({searchresults}) => {
    console.log(searchresults);
    const router = useRouter();
const { location, startDate, endDate, nuGuest } = router.query;

const formatedStartedDate = startDate ? format(new Date(startDate), "dd MMM yy") : '';
const formatedendedDate = endDate ? format(new Date(endDate), "dd MMM yy") : '';

const range = `${formatedStartedDate} - ${formatedendedDate}`;

 
   return (
    <div>
        <Header placeholder={`${location} | ${range} ${nuGuest}`}/>
        <main className='flex'>
<section>
    <p className='text-xs mt-5'>300+ Stays -{range}- for {nuGuest} number of guests</p>
     <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
    
     <div className='hidden lg:inline-flex mb-5 space-x-5 text-gray-800 whitespace:nowrap'>
        <p className='button'>Cancelation Flexibility</p>
        <p className='button'>Type of Place</p>
        <p className='button'>Price</p>
        <p className='button'>Rooms and Bed</p>
        <p className='button'>More Filters</p>
     </div>
     <div className='flex flex-col'>

     {searchresults?.map(({img,title,location,description,star,total,price})=>(
        <InfosCard
        key={img}
         img={img}
         location={location}
         title={title}
         description={description}
         star={star}
         total={total}
         price={price}
         />
     ))}
     </div>
</section>
<section className='hidden xl:min-w-[500px] xl:inline-flex'>
  <Mapa searchresults={searchresults}/>
</section>
        </main>
        <Footer/>
    </div>
  )
}

export default search
// ...

export async function getServerSideProps() {
    try {
      const response = await fetch("https://www.jsonkeeper.com/b/5NPS");
  
      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
  
      const searchresults = await response.json();
  
      return {
        props: {
          searchresults
        }
      };
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return {
        props: {
          searchresults: []
        }
      };
    }
  }
  
  
  // ...
  