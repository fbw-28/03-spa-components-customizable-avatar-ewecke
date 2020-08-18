
import React from 'react';
import Avatar from './Avatar';

function App() {
  
  const data =[
    {id:1,size:"s",type:"square", xy:"30x30"},
    {id:2,size:"s",type:"rounded", xy:"30x30"},
    {id:3,size:"s",type:"circle", xy:"30x30"},
    {id:4,size:"m",type:"square", xy:"60x60"},
    {id:5,size:"m",type:"rounded", xy:"60x60"},
    {id:6,size:"m",type:"circle", xy:"60x60"},
    {id:7,size:"l",type:"square", xy:"120X120"},
    {id:8,size:"l",type:"rounded", xy:"120X120"},
    {id:9,size:"l",type:"circle", xy:"120X120"},
    {id:10,size:"xl",type:"square", xy:"200X200"},
    {id:11,size:"xl",type:"rounded", xy:"200X200"},
    {id:12,size:"xl",type:"circle", xy:"200X200"},
  ]

  return (
    
      <div className="container"> 
      {data.map(item=>{
        return (
          <Avatar key={item.id} size={item.size} type={item.type} xy={item.xy} />
        )
      })}

      </div>
  
  );
}

export default App;