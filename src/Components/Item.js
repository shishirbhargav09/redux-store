import React from 'react'
import './Item.css'
function item(props) {

  return (
    <div>
        <div className="item_card">
            <div className="img"><img src={props.image}
 alt="" /></div>
            <div className="title"><h4>{props.title}...</h4></div>
            <div className="price"><h5>{props.price}</h5></div>
            <button>ADD TO CART</button>

        </div>
    </div>
  )
}

export default item