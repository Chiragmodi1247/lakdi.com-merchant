import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import { googleProvider, currentUser } from "../firebaseConfig.js";
// import router from '../router/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    newUserData: {
      merchantId: "",
      email: ""
    },
    emailToSend: {
      email: ""
    },
    loggedUserData: {
      merchantId: "",
      email: ""
    },
  },
  mutations: {
    SET_NAME(state, value) {
      state.newUserData.email = value;
      state.emailToSend.email = value;
    },
    SET_UID(state, value) {
      state.newUserData.merchantId = value;
    },
    SET_LOGIN(state) {
      state.isLogged = true;
    },
    SET_LOGOUT(state) {
      state.isLogged = false;
    }
  },
  actions: {
    getTokenFirebase() {
      let that = this;
      firebase
        .auth()
        .currentUser.getIdTokenResult(true)
        .then(function(token) {
        window.console.log("Received token in get token: "+ token.token)
          fetch("/backend/merchant/productdetails/merchantProduct", {
            headers: {
              "token": token.token
            },
            method: "GET"
          })
            .then(res  => {
              window.console.log("Return from getToken: "+ res)
              localStorage.setItem("myToken", token.token)
            })
            .catch(function(error) {
              that.$router.push({path: '/login'})
              alert("Error in login!")
              window.console.log("You can't log in because: " + error);
            });
        });
    },
    addNewUserToken() {
      let that = this;
      firebase
        .auth()
        .currentUser.getIdTokenResult(true)
        .then(function(token) {
          fetch("/backend/merchant/add", {
            headers: {
              "Content-Type": "application/json",
              "token": token.token,
              "merchantId": that.state.newUserData.merchantId
            },
            method: "POST",
            body: JSON.stringify(that.state.emailToSend)
          })
          .then(function() {
            localStorage.setItem("myToken", token.token)
          })
          .catch(function(error) {
            that.$router.push({path: '/login'})
            alert("Error in login!")
            window.console.log("You can't log in because: " + error);
          });
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
            that.dispatch("getTokenFirebase");
            resolve("User logged");
            window.console.log("res from firebase on existing user: " + res);
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
      let that = this;
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(data.email, data.password1)
          .then(function(res) {
            let user = firebase.auth().currentUser;
            window.console.log("UID in new user: " + user.uid);
            window.console.log("res from firebase on new user: " + res);
            context.commit("SET_NAME", data.email);
            context.commit("SET_UID", user.uid);
            that.dispatch("addNewUserToken");
            resolve("New user created");
          })
          .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.console.log("Error code: " + errorCode);
            window.console.log("Error msg: " + errorMessage);
            reject("Not able to create new user");
          });
      });
    },
    printToken() {
      window.console.log("In print token");
      currentUser.getIdToken().then(function(idToken) {
        window.console.log("My login currentuser : " + idToken);
      });
    },
    logoutUser() {
      window.console.log("in Logout call from store");
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signOut()
          .then(function() {
            resolve("Logged out");
            localStorage.removeItem("myToken")
          })
          .catch(function(error) {
            reject(error);
          });
      });
    },
    googleauth() {
      let that = this;
      return new Promise(function(resolve, reject) {
        firebase
          .auth()
          .signInWithPopup(googleProvider)
          .then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            window.console.log("token: " + token + " ," + "user: " + user);
            that.dispatch("getTokenFirebase");
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
