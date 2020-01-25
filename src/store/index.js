import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import {
  googleProvider,
  facebookProvider,
  currentUser
} from "../firebaseConfig.js";
// import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    password: "",
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
    SET_PASSWORD(state, value) {
      state.password = value;
    },
    SET_LOGIN(state) {
      state.isLogged = true;
    },
    SET_LOGOUT(state) {
      state.isLogged = false;
    }
  },
  actions: {
    loginUser(context, data) {
      return new Promise(function(resolve, reject) {
        // window.console.log("Login details in dispatch: "+ data)
        firebase
          .auth()
          .signInWithEmailAndPassword(data.email, data.password1)
          .then(function(res) {
            context.commit("SET_NAME", data.email);
            context.commit("SET_PASSWORD", data.password);
            context.commit("SET_LOGIN");
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
      context.commit("SET_NAME", data.email);
      context.commit("SET_PASSWORD", data.password1);
      context.commit("SET_LOGIN");

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(function(res) {
          window.console.log("You are registered successfully");
          window.console.log("res from firebase on new user: " + res.uid);
          let userID = firebase.auth().currentUser.uid;
          let userName = firebase.auth().currentUser.displayName;
          let myUIDtoken = firebase.auth().currentUser.getIdToken();

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
      firebase
        .auth()
        .signOut()
        .then(function() {
          // Sign-out successful.
          window.console.log("User is out in dispatch");
          context.commit("SET_LOGOUT");
        })
        .catch(function(error) {
          // An error happened.
          window.console.log("Error in dispatch " + error);
        });
    },
    googleauth() {
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.console.log("token: " + token + " ," + "user: " + user);
            // router.push({ path: "/merchantHome" });
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
    fbAuth: function() {
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signInWithPopup(facebookProvider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.console.log("token: " + token + " ," + "user: " + user);
            // router.push({ path: "/merchantHome" });
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
    }
  }
});
