import { createSlice } from "@reduxjs/toolkit";

const VALID_USERNAME = "admin";
const VALID_PASSWORD = "password123";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isLoggedIn: false,
    username: "Guest", // Initialiser à "Guest"
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
      const { username, password } = action.payload;
      if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        state.isLoggedIn = true;
        state.username = username;
      } else {
        console.log("Mauvais mot de passe");
      }
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.username = "Guest";
    },
    resetCart: (state, action) => {
      state.items = []
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, setLoggedIn, setLoggedOut, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

