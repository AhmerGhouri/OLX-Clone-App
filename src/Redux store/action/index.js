import firebase from '../../Database config/firebase';
import history from 'history';
// import { createBrowserHistory } from 'history';

const Google_Signin = (history) => {

    return (dispatch) => {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;

                let create_user = {

                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid

                }
                firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
                    .then(() => {
                        dispatch({ type: "SETUSER", payload: create_user })
                        alert("login Sucessfully")
                        // this.props.history.push('/item')

                    })



            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }

}


export {
    Google_Signin
}