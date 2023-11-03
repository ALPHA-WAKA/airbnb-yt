import  {  useState } from 'react';
import ReactMapGl,{Marker,Popup} from "react-map-gl"
import { getCenter } from 'geolib';
const Mapa = ({searchresults}) => {
  const coordinates=searchresults.map((result)=>(
    {
      longitude:result.long,
      latitude:result.lat
    }
  ))
  const [selectedLocation, setSelectedLocation] = useState({});
  const center=getCenter(coordinates)
  
    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:8,
    });
 return (
    
    <ReactMapGl
    mapStyle="mapbox://styles/alphawaka/clohefh39001901pl8v1h7y6p"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMove={evt => setViewport(evt.viewState)}
    
   
   
  >
    {searchresults.map(result=>(
      <div key={result.lat}>
        <Marker
        longitude={result.long}
        latitude={result.lat}
        offsetLeft={-20}
        offsetTop={-10}
        onClick={()=>setSelectedLocation(result)}
        >
          
       
   <p role='img' className='cursor-pointer text-2xl animate-bounce '
         onClick={()=>setSelectedLocation(result)}
         aria-label='push-pin' >
          📌
          </p>

        </Marker>
        {selectedLocation.long===result.long?(
          <Popup 
          closeOnClick={true}
          onClose={()=>setSelectedLocation({})}
          latitude={result.lat}
          longitude={result.long}>
    {result.title}
          </Popup>
        ):(false)}
        </div>
    ))}
  </ReactMapGl>

  )
}

export default Mapa