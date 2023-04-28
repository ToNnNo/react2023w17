import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: 'todolist',
  initialState: {
    tasks: [] // ['Créer une todo list', 'Ajouter des valeurs', 'Supprimer des valeurs']
  },
  reducers: {
    add: (state, action) => {
      state.tasks.push(action.payload.task);
      // state.tasks = [...state.tasks, action.payload.task]; // sans immer
    },
    remove: (state, action) => {
      state.tasks.splice(action.payload.index, 1);
    }
  }
});

export const { add, remove } = todoListSlice.actions;

export default todoListSlice.reducer;