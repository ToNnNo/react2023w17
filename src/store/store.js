import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../slice/counterSlice"
import todoListSlice from "../slice/todoListSlice"
import userSlice from "../slice/userSlice"

export default configureStore({
  reducer: {
    counter: counterSlice,
    todoList: todoListSlice,
    user: userSlice
  }
})