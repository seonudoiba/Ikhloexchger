

function Table({ data }) {
  let mydata = data.posts.data;
  return (
    <div className="text-md bg-gray-50 border-2  px-32 py-4 ">
      <h1 className="text-center pt-4 font-bold text-3xl">Top Cryptocurrencies</h1>
      {/* //1st row */}
      <div className="grid grid-cols-6 gap-4 my-8 p-4 border-b rounded-xl text-center font-bold bg-gray-200">
        <div>#</div>
        <div>Currency</div>
        <div>Price(USD)</div>
        <div> 24h Change</div>
        <div>Market Cap</div>
        <div></div>
      </div>
      {/* //2st row */}
      <div className="grid grid-cols-6 text-center  mr-3 gap-4">
        {/* ------------id---------------- */}
        <div className="grid grid-rows gap-2 ">
          {mydata.map(function (d, idx) {
            return (
              <div className="border-b rounded-xl font-bold bg-gray-100 py-2" key={idx}>
                {idx + 1}
              </div>
            );
          })}
        </div>
        {/* ------------currency---------------- */}
        <div className="grid grid-rows gap-2">
          {mydata.map(function (d, idx) {
            return (
              <div className="border-b bg-gray-100 py-2" key={idx}>
                 {d.name} {<span className="font-bold">{d.symbol}</span>}
              </div>
            );
          })}
        </div>
        {/* ------------Price---------------- */}
        <div className="grid grid-rows gap-2">
          {mydata.map(function (d, idx) {
            const n = d.quote.USD.price.toFixed(2);
            const numberFormatter = Intl.NumberFormat('en-US');
            const price = numberFormatter.format(n);
            return (
              <div className="border-b bg-gray-100 py-2" key={idx}>
                {`$ ${price}`}
              </div>
            );
          })}
        </div>
         {/* ------------percent_change_24h---------------- */}
        <div className="grid grid-rows gap-2">
          {mydata.map(function (d, idx) {
            return (
              <div className={d.quote.USD.percent_change_24h >= 1? "text-green-700 p-1 border-b bg-gray-100 py-2": "text-red-700 p-1 border-b bg-gray-100 py-2"  } key={idx}>
                {`${d.quote.USD.percent_change_24h.toFixed(2)}%`}
              </div>
            );
          })}
        </div>
        {/* ------------Messagge---------------- */}
        <div className="grid grid-rows gap-2">
          {mydata.map(function (d, idx) {
            const n = d.quote.USD.market_cap.toFixed(1);
            const numberFormatter = Intl.NumberFormat('en-US');
            const marketcap = numberFormatter.format(n);
            return (
              <div className="border-b bg-gray-100 py-2" key={idx}>
                {`$${marketcap}`}
              </div>
            );
          })}
        </div>
        {/* ------------Messagge---------------- */}
        <div className="grid grid-rows text-right gap-2">
          {mydata.map(function (d, idx) {
            return (
              <div className=" py-2" key={idx}>
                <button
            className=" bg-transparent bg-gray-200 hover:bg-green-500 text-green-700 font-semibold 
            hover:text-gray-100 py-1 px-1 border
              border-green-500 hover:border-white
              hover:shadow-xl rounded"
          >
            <a href="https://wa.me/2349072709373">Trade Now</a>
          </button>
              </div>
            );
          })}
        </div>
        {/* ------------Messagge----------------
        <div className="grid grid-rows gap-4">
          {mydata.map(function (d, idx) {
            return (
              <div className="list-none" key={idx}>
                {`${Math.round(d.quote.USD.percent_change_1h)}`}
              </div>
            );
          })}
        </div> */}
        
      </div>
    </div>
  );
}

export default Table;
