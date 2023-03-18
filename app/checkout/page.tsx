"use client"
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import CheckoutComponent from "../../components/checkout";

function Checkout() {
  return (
    <Provider store={store}>
    <CheckoutComponent/>
    </Provider>
  );
}

export default Checkout;
