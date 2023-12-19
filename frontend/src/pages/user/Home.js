import React from 'react'
import PizzaList from '../../components/pizzaList'


const Home = () => {
  return (
    <div >
        <div style={{paddingBottom:"2rem" , backgroundColor:"#FFD500"}}>
       <img src="/pizza.jpg" width="100%" height={400}/> 
       </div>
       <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center",flexWrap:"wrap"}}>
        <img src='https://img.freepik.com/photos-premium/pizza-isolee-aux-champignons-olives_219193-8149.jpg' width="150" height="150" style={{borderRadius:"70%"}}/>
        <img src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-food-toast-burger-png-image_9113989.png" width="180" height="180"/>
        <img src="https://img.freepik.com/photos-premium/taco-qui-contient-du-boeuf_873925-20284.jpg" width="180" height="180"/>
       <img src="https://i.pinimg.com/originals/c7/1c/58/c71c58851e80e44f8667b3f8929fc887.jpg" width="180" height="180"/>
       </div>
        <div style={{height:"2rem",backgroundColor:"black"}}></div>
        <div>
            <PizzaList/>
        </div>
    </div>
  )
}

export default Home