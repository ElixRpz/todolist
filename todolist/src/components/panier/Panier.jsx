import React from 'react'

const Panier = ({changeColor,setChangeColor}) => {
  return (
    <div>
        <button onClick={()=>setChangeColor(!changeColor)}>bouton panier</button>
    </div>
  )
}

export default Panier