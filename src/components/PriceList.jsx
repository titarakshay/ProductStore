import React from "react";

export default function PriceList(props) {
  return (
    <select
      className="select-wrapper"
      value={props.price}
      onChange={props.change}
      name="priceRange"
      id=""
    >
      <option value="">---</option>
      {props.prices.map((range) => {
        return <option value={range}>{range}</option>;
      })}
    </select>
  );
}
