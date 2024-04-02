import { createSlice } from "@reduxjs/toolkit";
//reducers here
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
        //vanilla redux older version =>dont mutate state, returning state was mandatory . same thing in is fone in newer version but we as a developer dont need to handle thid ,immer library is used bts
        //mutating the state here(in newer version we have to mutate state or return a new state)
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
        // state=[] wont work because of immer(it is not mutaing the state just adding reference of it)
        //state is local variable having value of original state so you actually have to modify it hence the changes are done to this local variable but not the original state, return {items:[]}; would have also worked 
      state.items.length = 0;
      //console.log(state); wont work properly as redux has its own way of handling state (redux create proxy object),instead use clg(current(state)); current will come from @reduxjs/toolkit
    },
  },
});
export const {addItems,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;//one of reducers is exported
