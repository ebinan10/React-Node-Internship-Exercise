import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';
import Menu from './Menu'

import './App.css'

class Map extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
           arr:[] 
        }
    }
    componentDidMount(){
        this.Meal()
    }
        Meal=()=>{
   //     const cors = 'https://cors-anywhere.herokuapp.com'   
        const url ='https://asm-dev-api.herokuapp.com/api/v1/food';
        fetch(url)
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            this.setState({
                 arr:data.data.meals})
        })
        .catch(err=>{
            console.log(err)
        })
        }
    render() {
        const {arr} = this.state;
       
       const  colA= []; 
       const colB = [];
       const colC  = [];
    //    let arr1=['hello world','welcome world','singing']
       const res = arr.map((item,id)=><Menu key={item.id}
       strMeal={item.strMeal} strMealThumb={item.strMealThumb}
        title={item.title} price={item.price} ratings={item.ratings} 
        description={item.description}  
        />
        )
            
            res.forEach((item,id) => {
                
                id % 3 === 0 ? colA.push(
                    item
                ): 
                id % 3 === 1 ? colB.push(item):
                 colC.push(item); 
                     
            });
          
        
        return (
            <div className='container'>
           <MetaTags>

            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
          </MetaTags>
        <div className='content'>{colA}</div>
        <div className='content'>{colB}</div>
        <div className='content'>{colC}</div>
          </div>
        )
    }
}

export default Map
