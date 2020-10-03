import React from "react";
import { connect } from "react-redux";
import PriceList from "./PriceList";
import { handleSubmitAction } from "../store/action";
import { NavLink } from "react-router-dom";

class EditProduct extends React.Component {
  state = {
    id: "",
    name: "",
    pricingTier: "",
    priceRange: "",
    weight: "", // In grams,
    availability: 0,
    isEditable: false,
    productUrl: "",
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const singleProduct = this.props.state.products.filter(
      (product, i) => i === Number(id)
    )[0];

    this.setState({
      id,
      name: singleProduct.name,
      pricingTier: singleProduct.pricingTier,
      priceRange: singleProduct.priceRange,
      weight: singleProduct.weight,
      availability: singleProduct.availability,
      isEditable: singleProduct.isEditable,
      productUrl: singleProduct.productUrl,
    });
  }

  handleRadio = (e) => {
    this.setState({ pricingTier: e.target.name });
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "isEditable") {
      this.setState({ isEditable: !this.state.isEditable });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let product = this.state;
    this.props.dispatch(handleSubmitAction(product));
    this.props.history.push("/");
  };
  render() {
    // variables taking from state
    const {
      name,
      pricingTier,
      priceRange,
      weight,
      availability,
      isEditable,
    } = this.state;

    // diable button logic
    const disable =
      !name || !pricingTier || !priceRange || !weight || !isEditable;
    // pricing info array
    const { budget, premier } = this.props.state.pricingInfo;

    return (
      <div className="form-wrapper container">
        <NavLink to="/">Back</NavLink>
        <div className="form-heading">
          <h1>Product Edit From</h1>
        </div>
        <div className="outer-box">
          <form onSubmit={this.handleSubmit}>
            <label className="label my-3" htmlFor="">
              Product Name
            </label>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={this.handleInput}
              name="name"
            />
            <div>
              <label className="label mr-3 my-3" htmlFor="">
                Product PricingTier-:
              </label>
              <label className="label mr-3 my-3" htmlFor="pricingTier">
                Premier
              </label>
              <input
                type="radio"
                name="premier"
                className="mr-3 my-3"
                checked={pricingTier === "premier"}
                onChange={this.handleRadio}
                value="premier"
              />
              <div className="inline block">
                <label className="label mr-3 my-3" htmlFor="pricingTier">
                  Budget
                </label>
                <input
                  type="radio"
                  name="budget"
                  className="mr-3"
                  checked={pricingTier === "budget"}
                  onChange={this.handleRadio}
                  value="budget"
                />
              </div>
            </div>
            <div>
              <label className="label mr-3 my-3" htmlFor="">
                Product PriceRange
              </label>
              {pricingTier === "budget" ? (
                <PriceList
                  prices={budget}
                  price={priceRange}
                  change={this.handleInput}
                />
              ) : (
                <PriceList
                  prices={premier}
                  price={priceRange}
                  change={this.handleInput}
                />
              )}
            </div>
            <label htmlFor="">Product Availability</label>
            <input
              className="form-control my-3"
              type="number"
              name="availability"
              onChange={this.handleInput}
              value={availability}
            />
            <label htmlFor="" className="my-3">
              Product Weight
            </label>
            <input
              className="form-control"
              type="text"
              name="weight"
              onChange={this.handleInput}
              value={weight}
            />
            <label htmlFor="" className="my-3 mr-3">
              Product Editable
            </label>
            <input
              type="checkbox"
              name="isEditable"
              onChange={this.handleInput}
              checked={isEditable}
            />
            <button
              disabled={disable}
              className="btn my-3 block-form btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return { state };
}

export default connect(mapState)(EditProduct);
