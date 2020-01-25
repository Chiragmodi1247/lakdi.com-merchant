import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import {
  googleProvider,
  currentUser
} from "../firebaseConfig.js";
// import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    newUserData: {
      merchantId: "",
      email: ""
    },
    loggedUserData: {
      merchantId: "",
      email: ""
    }
  },
  mutations: {
    SET_NAME(state, value) {
      state.email = value;
    },
    SET_LOGIN(state) {
      state.isLogged = true;
    },
    SET_LOGOUT(state) {
      state.isLogged = false;
    }
  },
  actions: {
    sendTokenTos(context, token) {
      // fetch("http://10.177.68.26:8111/product/getCategories")
      // .then(function(res) {
      window.console.log("To send this token: " + token);
      // window.console.log("From send token: " + res);
      // })
      // .catch(function(err) {
      //   window.console.log("error in send token" + err);
      // });
    },
    getTokenFirebase(){
      firebase
      .auth()
      .currentUser.getIdTokenResult(true).then(function(token){
      // localStorage.setItem('user-token',token.token);
      window.console.log(token.token);
      });
  },
    loginUser(context, data) {
      let that = this;
      return new Promise(function(resolve, reject) {
        // window.console.log("Login details in dispatch: "+ data)
        firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password1)
          .then(function(res) {
            context.commit("SET_NAME", data.email);
            context.commit("SET_LOGIN");
            that.getTokenFirebase();
            window.console.log("res from firebase on existing user: " + res);
            resolve("Data added to store");
          })
          .catch(function(error) {
            reject(error);
            var errorCode = error.code;
            var errorMessage = error.message;
            window.console.log("Error code: " + errorCode);
            window.console.log("Error msg: " + errorMessage);
          });
      });
    },
    createNewUser(context, data) {

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(res) {
          window.console.log("You are registered successfully");
          window.console.log("res from firebase on new user: " + res.uid);
          let userID = firebase.auth().currentUser.uid;
          let userName = firebase.auth().currentUser.displayName;
          let myUIDtoken = firebase.auth().currentUser.getIdToken();
          context.commit("SET_NAME", data.email);
          context.commit("SET_LOGIN");
    
          if (userID) {
            window.console.log("User UID: " + userID);
            window.console.log("User Name: " + userName);
            window.console.log("User ID token: " + myUIDtoken);
          } else window.console.log("Current User is not working");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          window.console.log("Error code: " + errorCode);
          window.console.log("Error msg: " + errorMessage);
        });
    },
    printToken() {
      window.console.log("In print token");
      currentUser.getIdToken().then(function(idToken) {
        window.console.log("My login currentuser : " + idToken);
      });
    },
    logoutUser(context) {
      window.console.log("in Logout call from store");
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signOut()
          .then(function() {
            // Sign-out successful.
            // window.console.log("User is out in dispatch");
            resolve("Logged out");
            context.commit("SET_LOGOUT");
          })
          .catch(function(error) {
            // An error happened.
            reject(error);
            // window.console.log("Error in dispatch " + error);
          });
      });
    },
    googleauth(context) {
      let that = this;
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.console.log("token: " + token + " ," + "user: " + user);
            context.commit("SET_LOGIN");
            that.dispatch("getTokenFirebase");
            // that.getTokenFirebase();

            // window.console.log("That obejct: "+ that)
            resolve("GoogleAuth success");
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            window.console.log(errorCode + errorMessage + email + credential);
            reject("GoogleAuth unsuccess");
          });
      });
    },
  }
});
