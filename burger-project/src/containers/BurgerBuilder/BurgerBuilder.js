import React, { Component } from "react";
import Aux from "../../hoc/Auxi/Auxius";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandle from "../../hoc/withErrorHandle/withErrorHandle";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";
import axios from "../../axios-orders";

export class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    orderSuccess: this.props.orderSuccess
  };

  componentDidMount() {
    this.props.onInitIgredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetAuthRedirectPath("/checkout");
      this.props.history.push("/auth");
    }
  };

  purchaseCancelHandler = () => {
    this.props.onOrderSuccess(false);
    this.setState({ purchasing: false, orderSuccess: false });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchased();
    this.props.history.push("/checkout");
  };

  render() {
    const disableInfo = {
      ...this.props.ings
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.props.error ? (
      <p style={{ textAlign: "center" }}>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingrAdded={this.props.onIgredientAdded}
            ingrRemoved={this.props.onIgredientRemoved}
            purchaseble={this.updatePurchaseState(this.props.ings)}
            disable={disableInfo}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
            price={this.props.price}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          totalPrice={this.props.price}
        />
      );
    }

    let orderSuccessForm = null;

    if (this.state.orderSuccess) {
      orderSuccessForm = (
        <Modal
          show={this.state.orderSuccess}
          modalClosed={this.purchaseCancelHandler}
        >
          <p style={{ textAlign: "center" }}>Thank you for order!</p>
        </Modal>
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {orderSuccessForm}
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token != null,
    orderSuccess: state.order.orderSuccess
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIgredientAdded: ingName => dispatch(action.addIngredient(ingName)),
    onIgredientRemoved: ingName => dispatch(action.removeIngredient(ingName)),
    onInitIgredients: () => dispatch(action.initIgredients()),
    onInitPurchased: () => dispatch(action.purchaseInit()),
    onSetAuthRedirectPath: path => dispatch(action.setAuthRedirectPath(path)),
    onOrderSuccess: val => dispatch(action.purchaseOrderSuccess(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandle(BurgerBuilder, axios));
