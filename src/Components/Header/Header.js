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
// import { createBrowserHistory } from 'history';
// import history from 'history';

const photos = [
  {
    name: "Photo 1",
    url: "https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp",

  },
  {
    name: "Photo 2",
    url: "https://statics.olx.com.pk/external/base/img/loginEntryPointFavorite.webp",

  },
  {
    name: "Photo 3",
    url: "https://statics.olx.com.pk/external/base/img/loginEntryPointChat.webp",


  }
]




class Header extends React.Component {

  constructor() {
    super()
    this.state = {
      show: false
    }


    this.state = {

      show: false

    }

  }

  handleUser() {
    this.setState({ show: !this.state.show })
  }

  handleModal() {
    this.setState({ show: !this.state.show })
  }

  render() {

    const settings = {
      dots: true,
      infinte: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
    }

    let user = this.props.current_user;

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


        <div>

          <img show = {this.state.show} onHide={() => {this.handleUser()}} src={user.photo} alt="Profile Pic" className="ProfilePic" />
          {/* {user.name} */}

        </div>


        <div className="SearchBtn">

          <div>

            <Button className="log" onClick={() => { this.handleModal() }}>Login</Button>
            <Modal className="body" show={this.state.show} onHide={() => { this.handleModal() }} >
              <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
              <Modal.Body className="modals">
                <div className="slides" style={{ padding: 24 }}>
                  <Slider {...settings}>

                    {photos.map((photo) => {
                      return (

                        <div className="Pop">

                          <div className="slider">
                            <img width="100px" className="web" src={photo.url} />
                          </div>

                        </div>
                      )
                    })}

                  </Slider>

                </div>

                <div className="with">


                  <div>
                    <button className="Continue">Continue with phone</button>
                    <button className="Continue" ><i class="fa fa-facebook fa2" aria-hidden="true"></i> Continue with facebook</button>
                    <button className="Continue" onClick={() => { this.props.Google_Signin(this.props.history) }}><i class="fa fa-google" aria-hidden="true"></i> Continue with google</button>
                    <button className="Continue">Continue with email</button>

                  </div>

                  <div className="popEnd">
                    <p>We won't share your personal details with anyone</p>

                  </div>
                  <p className="if">
                    If you continue,you are accepting

                    <a className="blue">OLX Terms and Conditions and Privacy Policy</a>
                  </p>


                </div>
              </Modal.Body>

            </Modal>

          </div>
          <button className="sell"><AddIcon style={{ fontSize: 20 }} />  SELL</button>



        </div>







      </div >






    );
  }
}




const mapStateToProps = (state) => ({

  current_user: state.current_user,

})

const mapDispatchToProp = (dispatch) => ({

  Google_Signin : (history) => dispatch(Google_Signin(history))


})

export default connect(mapStateToProps, mapDispatchToProp)(Header);



