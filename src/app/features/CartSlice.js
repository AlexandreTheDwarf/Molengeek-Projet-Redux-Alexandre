import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Tableau pour stocker les figurines dans le panier
    isLoggedIn: true, // État pour gérer la connexion
    UserName: "LeNain", // État pour stocker le nom d'utilisateur
  },
  reducers: {
    addToCart: (state, action) => {
      const figurine = action.payload;
      const existingFigurine = state.items.find((item) => item.id === figurine.id);

      if (existingFigurine) {
        existingFigurine.quantity += 1;
      } else {
        state.items.push({ ...figurine, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const figurineId = action.payload;
      state.items = state.items.filter((item) => item.id !== figurineId);
    },
    incrementQuantity: (state, action) => {
      const figurineId = action.payload;
      const figurine = state.items.find((item) => item.id === figurineId);
      if (figurine) {
        figurine.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const figurineId = action.payload;
      const figurine = state.items.find((item) => item.id === figurineId);
      if (figurine) {
        if (figurine.quantity > 1) {
          figurine.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== figurineId);
        }
      }
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, setLoggedIn } = cartSlice.actions;

export default cartSlice.reducer;
