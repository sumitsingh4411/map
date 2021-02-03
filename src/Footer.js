import React from 'react'
import './Footer.css'
import { useStateValue } from './stateprovider';
function Footer() {
    const [{country,dark}, dispatch] = useStateValue();
    return (
        <div className={dark ? "darkfooter" : "footer"}>
            <p style={{fontSize:'30px',marginTop:'20px' }}>sumit kumar singh</p>
        </div>
    )
}

export default Footer
