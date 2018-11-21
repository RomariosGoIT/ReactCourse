import { updateObject } from "../../../shared/utility";

export const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

export const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};

export const purchaseBurgerSuccess = (state, action) => {
  const newOrder = {
    ...action.orderData,
    id: action.orderId
  };
  return updateObject(state, {
    loading: false,
    order: state.orders.concat(newOrder),
    purchased: true
  });
};

export const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};

export const fetchOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
};

export const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false
  });
};

export const fetchOrdersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

export const purchaseOrderSuccess = (state, action) => {
  return updateObject(state, { orderSuccess: action.orderSuccess });
};
