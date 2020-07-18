import React from 'react';
import './About.css';
import AppBarBreadcrumbs from './AppBar&Breadcrumbs';

function About(){
    return(
<div className= "fonts">
<AppBarBreadcrumbs></AppBarBreadcrumbs>
    <h1>A &nbsp; B &nbsp; O   &nbsp;U  &nbsp;T &nbsp; &nbsp;  &nbsp;C &nbsp; H &nbsp; A &nbsp; N &nbsp; E  &nbsp;L &nbsp;:</h1>
<p className = "back"><br></br> Chanel S.A. is a French privately held company owned 
by Alain Wertheimer and Gérard Wertheimer,<img src={require('../components/coco.jpg')} alt="coco-chanel" width ="194" height= "196" align = "right"></img>
 grandsons of Pierre Wertheimer, who was an early business partner of the couturière Coco Chanel.
  Chanel focuses on high fashion and ready-made clothes, luxury goods, and accessories.In her youth, Gabrielle Chanel gained the 
  nickname Coco from her time as a chanteuse. As a fashion designer, Coco Chanel 
 catered to women's taste for elegance in dress, with blouses and suits, trousers and dresses, and jewellery (gemstone and bijouterie) 
 of simple design, that replaced the opulent, over-designed, and constrictive clothes and accessories of 19th-century fashion.
 The Chanel product brands have been personified by male and female fashion models, idols and actresses,including Inès de La Fressange,
  Catherine Deneuve, Carole Bouquet, Vanessa Paradis, Nicole Kidman, Jackie Kennedy, Anna Mouglalis, Audrey Tautou, Keira Knightley,
Kristen Stewart, Pharrell Williams, Jennie Kim, Cara Delevingne, and Marilyn Monroe.<br></br><br></br>
   <b>ACHIEVEMENTS</b>: Chanel is the only fashion designer who features on Time magazine's list of the 100 most influential people 
   of the 20th century.</p>
</div>
)
};

export default About;