import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    const { products } = this.props.state;

    return (
      <div className="products-wrapper container">
        <div className="align-center">
          <h1>Product Details</h1>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">PricingTier</th>
              <th scope="col">PriceRange</th>
              <th scope="col">Availability</th>
              <th scope="col">Weight(In gms)</th>
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
