import { configureStore  } from "@reduxjs/toolkit";
import rootred from "./components/redux/reducers/main";

­const store = (createStore)(reducer);

const Store =configureStore (
    rootred
);

export default Store;