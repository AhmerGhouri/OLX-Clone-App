import React, { StrictMode } from 'react';
import logo from '../../image/logo.png';
import '../Header/top.css';
import SearchIcon from '@material-ui/icons/Search';
import { ExpandMore, Photo, Search } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { set_data } from '../../Redux store/action';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import firebase from '../../Database config/firebase'
import { Google_Signin } from '../../Redux store/action/index'
import CardRouter from '../../Containers/item/item';
import { Link } from 'react-router-dom';
import Popup from '../Popup/popup'
// import { createBrowserHistory } from 'history';
// import history from 'history';





class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      user : this.props.current_user

    }


  }



  render() {


    console.log("user ==>",this.props.current_user)

    return (


      <div className="first fixed-top" >

        <div>
          <img src={logo} className="logo" alt="logo" />

        </div>


        <div className="seacrhBar">
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          <input type="text" className="input" placeholder="Search" value="Pakistan" />
          <ExpandMoreIcon style={{ fontSize: 50 }} />

        </div>


        <div className="longSearch">

          <input type="text" placeholder="Find Cars, Mobile Phone and more..." className="long" />


          <IconButton className="btn">
            <SearchIcon style={{ fontSize: 35 }} />
          </IconButton>


        </div>


        {/* <div>

          <img show={this.state.show} onHide={() => { this.handleUser() }} src={user.photo} alt="Profile Pic" className="ProfilePic" />
          {user.name}

        </div> */}


        <div className="SearchBtn">

          <div>


            <Popup />

          </div>
          <Link to='/item'><button className="sell" disabled={(this.props.current_user == '') ? true : false}><AddIcon style={{ fontSize: 20 }} />  SELL</button></Link>



        </div>







      </div >






    );
  }
}




const mapStateToProps = (state) => ({

  current_user: state.current_user,

})

const mapDispatchToProp = (dispatch) => ({

  Google_Signin: () => dispatch(Google_Signin())


})

export default connect(mapStateToProps, mapDispatchToProp)(Header);



