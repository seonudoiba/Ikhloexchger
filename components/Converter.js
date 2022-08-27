import { useState } from "react";

const Converter = ({ data }) => {
  let mydata = data.posts.data;
  const options = [];
  const options2 = [];
  var selling_price = 699.0;
  var selling_price = 679.0;

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

    setinputValue2(
      `#${Intl.NumberFormat("en-US").format(
        event.target.value * price1 * trading_price
      )}`
    );
  };
  // const ChangeInput2 = (event) => {
  //   setinputValue2(event.target.value);

  // }
  return (
    <form className="flex justify-around w=4/6">
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
      <div className='flex flex-col justify-center '>
        <select
          className="text-center w-56 h-12 m-4  "
          value={selected2}
          onChange={handleChange2}
        >
          <option className=""  value={1}>
            Naira
          </option>
        </select>
        <input type="text" className="text-center w-56 h-12 m-4 " value={inputValue2} />
      </div>
    </form>
  );
};

export default Converter;
