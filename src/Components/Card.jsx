import React from 'react'


const Card = ({brand, title, images , category ,price ,rating}) => {
  return (
    <div className= "rounded-xl group relative shadow-card hover:shadow-cardhover card" >
      <img
        className= "w-full h-full object-cover rounded-xl"
        src = {images[0]}
        alt = {title}
      />
       <div className= "group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md" >
          <p className= "text-white text-md overflow-y-auto prompt">{title}</p>
          <p className= "text-white text-sm">{brand}</p>
          <div className= "mt-auto flex justify-between items-center gap-2" >
            <div className= "flex overflow-y-auto items-center gap-1" >
                
                <p className= "text-white text-sm">{category}</p>
                <p className= "text-white text-sm">| $ : {price}</p>
                <p className= "text-white text-sm">Ratings : {rating}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card;