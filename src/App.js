import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeTemplate from './templates/HomeTemplates/HomeTemplate';
import { ContactTemplate } from './templates/ContactTemplate/ContactTemplate';
import { DetailTemplate } from './templates/DetailTemplate/DetailTemplate';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import SignUpTemplate from './templates/SignUpTemplate/SignUpTemplate';
// import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import DeitailMovies from './pages/Detail/DeitailMovies';
import Checkout from './pages/Checkout/Checkout'
import Loading from './components/Loading/Loading';
import { lazy, Suspense } from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';






const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))
const HomepageLazy = lazy(() => import('./templates/HomeTemplates/HomeTemplate'))

export const history = createBrowserHistory()

function App() {
  return (
    <div className="wrapper m-auto">
      <Router history={history}>
        <ScrollToTop />
        <Switch>

          {/* <Suspense fallback={<Loading />}>
            <HomepageLazy exact path='/' Component={Home} />
          </Suspense> */}
          <HomeTemplate exact path='/cinema-reactjs/' Component={Home} />
          <HomeTemplate exact path='/cinema-reactjs/home' Component={Home} />
          <ContactTemplate exact path='/cinema-reactjs/contact' Component={Contact} />
          <HomeTemplate exact path='/cinema-reactjs/news' Component={News} />
          <LoginTemplate exact path='/cinema-reactjs/login' Component={Login} />
          <SignUpTemplate exact path='/cinema-reactjs/register' Component={Register} />
          <DetailTemplate exact path='/cinema-reactjs/movie/:id' Component={DeitailMovies} />
          <Suspense fallback={<Loading />}>
            <CheckoutTemplateLazy exact path='/cinema-reactjs/checkout/:id' Component={Checkout} />
          </Suspense>
          {/* <Redirect exact path='/cinema-reactjs/checkout/:id' Component={Checkout}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
