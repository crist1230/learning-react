// external imports
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// internal redux
import { checkUserSession } from './store/user/user.action';

// routes
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  const dispatch = useDispatch();

  // useEffect runs once, when the component mounts
  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes> {/* a wrapper that contains all the routes that our website will point to */}
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />} /> {/* index says when the route matches the parent route render this element too*/}
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
      {/* 
        if someone visits '/' then the nav & home will be shown, but if someone visits '/shop'
        then keep the nav element but update the home element to be the shop element
      */}
    </Routes>
  );
};

export default App;
