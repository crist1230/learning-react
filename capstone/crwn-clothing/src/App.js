import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

const Shop = () => {
  return (
    <div>
      I am the shop!
    </div>
  )
};

const Checkout = () => {
  return (
    <div>
      I am the checkout!
    </div>
  )
};

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} /> {/* this is just saying that theres a
        path to /shop and when there's an attempt to access it, show the Shop element. And
        cuz this is a child of a route, the parent route (navigation) will show up no
        matter if you change the path to anything else. This does not make a link to shop 
        magically appear, you have to write that code in the place where you want it to 
        appear. In this case, you would write the code in the navigation element. */}
      </Route>
      <Route path='shop' element={<Shop />}/>
    </Routes>
  );
};

export default App;
