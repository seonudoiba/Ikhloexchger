import React from 'react'

const TradeButton = ({trade}) => {
  var selling_price = 679.0;
  var Buying_price = 679.0;
  let price;
  if (trade === 'Buying Rate') {
    price = Buying_price;
  }else if (trade === 'selliing Rate') {
    price = selling_price;
  }

  return (
    <div>
        <button
            className=" bg-transparent bg-white hover:bg-green-500 text-green-700 font-semibold m-4
            hover:text-gray-100 py-2 px-4 border
              border-green-500 hover:border-white
              hover:shadow-xl rounded"
              onClick={() => {handlePrice(price) ;}}
          >
            <a href="https://wa.me/2349072709373?text=Helloo%20world">{trade}</a>
          </button>
    </div>
  )
}

export default TradeButton