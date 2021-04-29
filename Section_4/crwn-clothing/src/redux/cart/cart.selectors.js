import { createSelector } from "reselect";
// npm install reselect

// 두 가지의 selector - input, output
// vue의 getters랑 비슷한 것인듯
// 사용하는 이유: memoised (코드 중복 줄이기)

// state 받고 리턴
const selectCart = (state) => state.cart;
// const selectUser = state.state.user;

// [selectCart]: 배열로 만들어 버리겠다
// cart에 있는 item 반환
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

// cart에 있는 item 개수 세서 반환
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
