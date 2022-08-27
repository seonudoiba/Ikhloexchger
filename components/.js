import { useState } from "react";
var selling_price = 709.0;
var buying_price = 679.0;
const Converter = ({ data }) => {
  let mydata = data.posts.data;
  const options = [];
  const options2 = [];

  mydata.map(function (d) {
    const n = d.quote.USD.price.toFixed(2);
    const numberFormatter = Intl.NumberFormat("en-US");
    var price;
    price = numberFormatter.format(n);
    let obj = {
      value: price,
      label: d.symbol,
    };

    options2.push(obj);
  });

  mydata.map(function (d) {
    let price = d.quote.USD.price.toFixed(2);
    let obj = {
      value: price,
      label: d.symbol,
    };

    options.push(obj);
  });

  const [selected, setSelected] = useState();
  const [selected2, setSelected2] = useState();
  const [inputValue, setinputValue] = useState(parseInt(1));
  const [inputValue2, setinputValue2] = useState();
  const [price1, setprice1] = useState(parseInt(options[0].value));
  const [quantity, setquantity] = useState(1);

  // let a = price + price2;
  // console.log(a);

  const handleChange = (event) => {
    setSelected(event.target.value);
    setprice1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelected2(event.target.value);
    // selectedSyb = event.target.value;
  };
  //  let handleSelect = (event, value) => {
  //     setinputValue2(  value *2 );
  //  }

  const ChangeInput = (event) => {
    setinputValue(event.target.value);

    setquantity(event.target.value);
  };

  const handlebuyPrice = (event) => {
    event.preventDefault();
    setinputValue2(
      `#${Intl.NumberFormat("en-US").format(quantity * price1 * buying_price)}`
    );
  };
  const handlesellPrice = (event) => {
    event.preventDefault();
    setinputValue2(
      `#${Intl.NumberFormat("en-US").format(quantity * price1 * selling_price)}`
    );
  };

  // const ChangeInput2 = (event) => {
  //   setinputValue2(event.target.value);

  // }
  return (
    <form className="flex justify-around">
      <div className="flex flex-col justify-center">
        <select
          className="text-center w-56 h-12 m-4"
          value={selected}
          onChange={handleChange}
        >
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="text-center w-56 h-12 m-4"
          onChange={ChangeInput}
          value={inputValue}
        />
      </div>
      {/* Trade------------------------------------------ */}
      <div className="flex flex-col justify-center ">
        <button
          className=" bg-transparent bg-white hover:bg-green-500 text-green-700 font-semibold m-4
            hover:text-gray-100 py-2 px-4 border
              border-green-500 hover:border-white
              hover:shadow-xl rounded"
          onClick={handlebuyPrice}
        >
          Sell at #{buying_price}/$
        </button>
        <button
          className=" bg-transparent bg-white hover:bg-green-500 text-green-700 font-semibold m-4
            hover:text-gray-100 py-2 px-4 border
              border-green-500 hover:border-white
              hover:shadow-xl rounded"
          onClick={handlesellPrice}
        >
          Buy at #{selling_price}/$
        </button>
      </div>
      {/* Input 2----------------------------------------- */}
      <div className="flex flex-col justify-center ">
        <select
          className="text-center w-56 h-12 m-4  "
          value={selected2}
          onChange={handleChange2}
        >
          <option className="" value={1}>
            Naira
          </option>
        </select>
        <input
          type="text"
          className="text-center w-56 h-12 m-4 "
          value={inputValue2}
        />
      </div>
    </form>
  );
};

export default Converter;
