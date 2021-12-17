
import './App.css';
import Form from './component/form';
import PaymentMethod from './component/paymentpage';
import Home from "./component/home"
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  useRoutes,
} from "react-router-dom";
import AddressForm from './component/address/AddressForm';
import OrderHistory from './component/orderhistory';
import SelectAddress from './component/address/SelectAddress';
import Cart from './component/cart/Cart';
import ShippingMethod from './component/shipping/ShippingMethod';
import ProductOption from './component/product/ProductOption';
import EditProfile from './component/profile/EditProfile';
const DefaultApp = () => {
  let routes = useRoutes([
    { path: "/", element: <Form /> },
    { path: "/home", element: <Home /> },
    { path: "/address", element: <AddressForm /> },
    { path: "/orderhistory", element: <OrderHistory /> },
    { path: "/selectaddress", element: <SelectAddress /> },
    { path: "/cart", element: <Cart /> },
    { path: "/shippingmethod", element: <ShippingMethod /> },
    { path: "/paymentmethod", element: <PaymentMethod /> },
    { path: "/productoption", element: <ProductOption /> },
    { path: "/editprofile", element: <EditProfile /> },

    // ...
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
    {/* <Form /> */}
   
    <Router>
      <DefaultApp />
    </Router>
          {/* <Redirect to="/" /> */}
    </div>
  );
}

export default App;
