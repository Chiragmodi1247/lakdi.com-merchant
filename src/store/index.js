import Vue from "vue";
import Vuex from "vuex";
// import firebase from "firebase";
// import { googleauthprovider, fbProvider } from "../firebaseConfig.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    merchantId: "myMerchant1247",
    name: "",
    password: "",
    isLogged: false
  },
  mutations: {
    SET_NAME(state, value) {
      state.name = value;
    },
    SET_PASSWORD(state, value) {
      state.password = value;
    }
  },
  actions: {
    loginUser(context, data) {
      context.commit("SET_NAME", data.name);
      context.commit("SET_PASSWORD", data.password);
      this.state.isLogged = true;
      // window.console.log(data);
    }
    // googleauth() {
    //   firebase
    //     .auth()
    //     .signInWithPopup(googleauthprovider)
    //     .then(function(result) {
    //       var token = result.credential.accessToken;
    //       var user = result.user;
    //       window.console.log("token: " + token + " ," + "user: " + user);
    //     })
    //     .catch(function(error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       var email = error.email;
    //       var credential = error.credential;
    //       window.console.log(errorCode + errorMessage + email + credential);
    //     });
    // },
    // fbAuth: function() {
    //   firebase
    //     .auth()
    //     .signInWithPopup(fbProvider)
    //     .then(function(result) {
    //       var token = result.credential.accessToken;
    //       var user = result.user;
    //       window.console.log("token: " + token + " ," + "user: " + user);
    //     })
    //     .catch(function(error) {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;
    //       var email = error.email;
    //       var credential = error.credential;
    //       window.console.log(errorCode + errorMessage + email + credential);
    //     });
    // }
  },
  modules: {}
});
