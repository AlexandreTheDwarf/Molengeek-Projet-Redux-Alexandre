import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid'; // Utiliser uuid pour générer des identifiants uniques

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Tableau pour stocker les figurines dans le panier
  },
  reducers: {
    addToCart: (state, action) => {
      const figurine = action.payload;
      const existingFigurine = state.items.find((item) => item.id === figurine.id);

      if (existingFigurine) {
        existingFigurine.quantity += 1;
      } else {
        // Ajouter un identifiant unique si la figurine n'en a pas déjà un
        const figurineWithId = { ...figurine, id: uuidv4(), quantity: 1 };
        state.items.push(figurineWithId);
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
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
