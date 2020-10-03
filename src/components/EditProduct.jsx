import React from "react";
import { connect } from "react-redux";
import PriceList from "./PriceList";
import { handleSubmitAction } from "../store/action";

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          value={name}
          onChange={this.handleInput}
          name="name"
        />
        <label htmlFor="">Product PricingTier</label>
        <label htmlFor="pricingTier">Premier</label>
        <input
          type="radio"
          name="premier"
          checked={pricingTier === "premier"}
          onChange={this.handleRadio}
          value="premier"
        />
        <label htmlFor="pricingTier">Budget</label>
        <input
          type="radio"
          name="budget"
          checked={pricingTier === "budget"}
          onChange={this.handleRadio}
          value="budget"
        />
        <label htmlFor="">Product PriceRange</label>
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
        <label htmlFor="">Product Availability</label>
        <input
          type="number"
          name="availability"
          onChange={this.handleInput}
          value={availability}
        />
        <label htmlFor="">Product Weight</label>
        <input
          type="text"
          name="weight"
          onChange={this.handleInput}
          value={weight}
        />
        <label htmlFor="">Product Editable</label>
        <input
          type="checkbox"
          name="isEditable"
          onChange={this.handleInput}
          checked={isEditable}
        />
        <button disabled={disable} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

function mapState(state) {
  return { state };
}

export default connect(mapState)(EditProduct);
