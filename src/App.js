
import React from 'react';
import Avatar from './Avatar';

function App() {
  
  const data =[
    {size:"s",type:"square", xy:"30x30"},
    {size:"s",type:"rounded", xy:"30x30"},
    {size:"s",type:"circle", xy:"30x30"},
    {size:"m",type:"square", xy:"60x60"},
    {size:"m",type:"rounded", xy:"60x60"},
    {size:"m",type:"circle", xy:"60x60"},
    {size:"l",type:"square", xy:"120X120"},
    {size:"l",type:"rounded", xy:"120X120"},
    {size:"l",type:"circle", xy:"120X120"},
    {size:"xl",type:"square", xy:"200X200"},
    {size:"xl",type:"rounded", xy:"200X200"},
    {size:"xl",type:"circle", xy:"200X200"},
  ]

  return (
    
      <div className="container"> 
      {data.map(item=>{
        return (
          <Avatar size={item.size} type={item.type} xy={item.xy} />
        )
      })}

      </div>
  
  );
}


export default App;