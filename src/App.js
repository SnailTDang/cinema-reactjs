import './App.css';
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import HomeTemplate from './templates/HomeTemplates/HomeTemplate';
import { ContactTemplate } from './templates/ContactTemplate/ContactTemplate';
import { DetailTemplate } from './templates/DetailTemplate/DetailTemplate';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import SignUpTemplate from './templates/SignUpTemplate/SignUpTemplate';
import { AboutTemplate } from './templates/AboutTemplate/AboutTemplate';
import ShowtimesTemplate from './templates/ShowtimesTemplate/ShowtimesTemplate';
import NewsTemplate from './templates/NewsTemplate/NewsTemplate';
import CheckoutTemplate from './templates/CheckoutTemplate/CheckoutTemplate'


import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import DeitailMovies from './pages/Detail/DeitailMovies';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Checkout from './pages/Checkout/Checkout';
import Showtimes from './pages/Showtimes/Showtimes';
import About from './pages/About/About';



export const history = createBrowserHistory()

function App() {
  return (
    <div className="wrapper m-auto">
      <Router history={history}>
        <ScrollToTop />
        <Switch>
          <HomeTemplate exact path='/' Component={Home} />
          <HomeTemplate exact path='/home' Component={Home} />
          <ShowtimesTemplate exact path='/showtimes' Component={Showtimes} />
          <ContactTemplate exact path='/contact' Component={Contact} />
          <NewsTemplate exact path='/news' Component={News} />
          <LoginTemplate exact path='/login' Component={Login} />
          <SignUpTemplate exact path='/register' Component={Register} />
          <DetailTemplate exact path='/movie/:id' Component={DeitailMovies} />
          <AboutTemplate exact path='/about' Component={About} />
          <CheckoutTemplate exact path='/checkout/:id' Component={Checkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
