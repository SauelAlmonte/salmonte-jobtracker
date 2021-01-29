// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

let uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],

  signInSuccessUrl: "dashboard.html"
}

ui.start('#login-ui',uiConfig)