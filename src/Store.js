import { legacy_createStore as createStore} from 'redux'
import rootred from "./components/redux/reducers/main";
  

const Store =createStore (
    rootred
);

export default Store;