const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //   console.log(action.payload.items);
      const tprice = initialState.totalPrice + action.payload.items.price;
      //   console.log(tprice);
      return {
        ...state,
        cart: [...state.action.payload.items],
        totalPrice: tprice,
      };
    default:
      return {
        state,
      };
  }
};
export default cartReducer;
