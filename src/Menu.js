import React from 'react'
import  './App.css'
import one from './image/one.jpg'
import two from './image/two.jpg'
import three from './image/three.jpg'
import four from './image/four.jpg'
import five from './image/five.jpg'

 function Menu({strMealThumb,title,strMeal,price,ratings,description}){
   
const viewDetails=(e)=>{
  let targetNodeA=e.target.parentNode
  let  targetNode=targetNodeA.previousSibling
  let targetNodeFirst = targetNode.firstChild
  let targetNodeLastChild = targetNode.lastChild
   var firstChild = window.getComputedStyle(targetNodeFirst).getPropertyValue('display');
   
  if (firstChild  === 'block') {
    targetNodeFirst.style.display  = 'none';
    targetNodeLastChild.style.display = 'block';
  } else {
    targetNodeFirst.style.display  = 'block';
    targetNodeLastChild.style.display =  'none';
 
  }
  
 }


    return (
      <div  className='div'>
        <div className='content'>
      <div className='foodImage'><img src={strMealThumb} alt=''/>
     </div><div> <div className ='flex'> 
          <div className='title'>
            {title}<br/>{strMeal}
             </div> 
          <div className='price'>{price}</div>
          </div>
         <div className='item' >
         <p id='shortText'> {description.substr(0,50)} </p>
         <p id='fullText'> {description} </p>
         </div>
         <div className ='detialing'> 
         <div className ='ratingImage'>{
           ratings===1?<img  src={one} alt=''/>:
           ratings===2?<img  src={two} alt=''/>:
           ratings===3?<img  src={three} alt='' / >:
           ratings===4?<img  src={four} alt=''/>:
           <img  src={five} alt=''/>
           }</div>
           <button className ='addition' onClick=
            {viewDetails}>+</button>
           </div>
         </div>
  </div>
  </div>
    )
}
export default Menu;