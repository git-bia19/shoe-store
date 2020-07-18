import React from 'react';
import './Contact.css';
import AppBarBreadcrumbs from './AppBar&Breadcrumbs';


function Contact() {
    return(
<div>
    <AppBarBreadcrumbs></AppBarBreadcrumbs>
<div className ="font" >
    <h3>C &nbsp;O &nbsp;N &nbsp;T &nbsp;A &nbsp;C &nbsp;T  &nbsp; &nbsp;C &nbsp;H &nbsp;A &nbsp;N &nbsp;E &nbsp;L:</h3>
     <p class= "back"> <img src={require('../components/fb.png')} alt= "fb logo" width ="90" height ="60" align ="center" ></img>                                                     
     https://fb/chanel.com<br></br></p>

   <p class ="back"><img src={require('../components/call.png')} alt= "phone no" width ="60" height ="50" align ="center"></img> +1 323 56787</p>
</div>
</div>
    )
}


export default Contact;