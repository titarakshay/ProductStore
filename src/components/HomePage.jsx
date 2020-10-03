import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    const { products } = this.props.state;

    return (
      <div className="products-wrapper">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">name</th>
              <th scope="col">pricingTier</th>
              <th scope="col">priceRange</th>
              <th scope="col"> availability</th>
              <th scope="col">weight(In gms)</th>
              <th scope="col">Editable</th>
            </tr>
          </thead>
          {products.map((product, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <th scope="row">{product.name}</th>
                  <th scope="row">{product.pricingTier}</th>
                  <th scope="row">{product.priceRange}</th>
                  <th scope="row">{product.availability}</th>
                  <th scope="row">{product.weight}</th>
                  <th scope="row">
                    {product.isEditable ? (
                      <NavLink to={`/product/${i}`}>Edit</NavLink>
                    ) : (
                      ""
                    )}
                  </th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

function mapState(state) {
  return { state };
}

export default connect(mapState)(HomePage);
