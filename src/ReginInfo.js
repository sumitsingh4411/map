import React from 'react'
import { Card } from 'antd';
import { useStateValue } from './stateprovider';
import "./ReginInfo.css"
function ReginInfo() {
    const [{country,dark},] = useStateValue();
    return (
     <Card  className={dark ? "darkcard":null} title="Country Information"   
     style={{ width: 300 , position:'absolute',
     top: 32 ,
     right:62,
     zIndex:999,
     }}>
        <p className={dark ? "darkp":null}>{
           country=="India" ? (
              <>
              <p>Country Name : { country}</p>
              <p>Currancy Symbol: Rs.</p>
              <p>Units of speed: kmph</p>
              <p>Distance: Km</p>
              <p>Volume: liters</p>
              <p>TimeZone : (IST) GMT+5:30</p>
              <a href="https://en.wikipedia.org/wiki/India">more Information</a>
              </>
           ):null
        }</p>
            <p>{
           country=="United Kingdom" ? (
            <>
            <p>Country Name : { country}</p>
            <p>Currancy Symbol: £ </p>
            <p>Units of speed: kmph</p>
            <p>Distance: Miles</p>
            <p>Volume: Gallons</p>
            <p>TimeZone : Greenwich Mean Time</p>
            <a href="https://en.wikipedia.org/wiki/United_Kingdom">more Information</a>
            </>
           ):null
        }</p>
                <p>{
           country=="United States" ? (
            <>
            <p>Country Name : { country}</p>
            <p>Currancy Symbol: $</p>
            <p>Units of speed: kmph</p>
            <p>Distance: Km</p>
            <p>Volume: liters</p>
            <p>TimeZone : (EST) GMT-5 </p>
            <a href="https://en.wikipedia.org/wiki/United_States">more Information</a>
            </>
           ):null
        }</p>
      </Card>
    )
}

export default ReginInfo
