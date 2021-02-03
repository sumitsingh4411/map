import React,{useEffect,useState} from 'react'
import './Map.css'
import { MapContainer, TileLayer,Marker,Popup} from 'react-leaflet'
import { Fab } from '@material-ui/core';
import FormInput from './FormInput';
import ReginInfo from './ReginInfo';
import { useStateValue } from './stateprovider';

function Map() {
    const [{country}, dispatch] = useStateValue();
    const[lat,setlat]=useState(78.9629);
    const[lon,setlon]=useState(20.5937);
    useEffect(()=>{
          if(country=="India")
          {
            setlat(78.9629)
            setlon(20.5937)
          }
          if(country=="United States")
          {
            setlon(37.0902)
            setlat(-95.7129)
          }
                 
          if(country=="United Kingdom")
            {
                setlon(55.3781)
                setlat(3.4360)
            }    
    },[country])

    return (
        <MapContainer  center={[lon,lat]} zoom={2}>
        <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lon,lat]}>
          <Popup>{country}</Popup>
        </Marker>
        <ReginInfo/>
        <Fab size="large" color="secondary" aria-label="edit" style={{zIndex:'999',
         position:'absolute',
         top: 442 ,
         right:152
         }}>
          <FormInput/>
         </Fab>
       </MapContainer>
    )
}

export default Map
