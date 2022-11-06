export const localdata = JSON.parse(localStorage.getItem("Products") || "");

export const initialState = { products: localdata || [] };
export const reducer = (
  state: { products: any },
  action: { payload: any; type: any }
) => {
  switch (action.type) {
    case "changeLike": {
      const index = state.products.findIndex(
        (item: { id: any }) => item.id === action.payload
      );
      state.products[index].like = !state.products[index].like;
      localStorage.setItem("Products", JSON.stringify(state.products));
      const newArray = [...state.products];
      return { ...state, products: newArray };
    }
    case "addProduct":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
