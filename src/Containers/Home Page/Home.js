import React from 'react';
import '../../App.css';
import Home from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Image from '../../Components/Logo/image'
import Card from '../../Components/Card/card'
import Top from '../../Components/lower/footer'
import ScrollToTop from '../../Components/lower/Scroll'
import AppRouter from '../../Router/router';

class FooClass extends React.Component {
  render() {

    return (

      <div className="foo">

        <div>

          <Header />

        </div >

        <div>

          <Home />

        </div>

        <div>

          <Image />

        </div>

        <div>

          <Card />

        </div>

        
        <div>

          <Top />

        </div>

        <div>

          <ScrollToTop />

        </div>



      </div>



    );
  }
}

export default FooClass;