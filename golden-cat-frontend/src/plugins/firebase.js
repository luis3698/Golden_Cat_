import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDma1hZgZ4lIDe7E0vGnbg4V6B9T7yitwU',
  authDomain: 'goldencat-d2043.firebaseapp.com',
  databaseURL: 'https://goldencat-d2043.firebaseio.com',
  storageBucket: 'goldencat-d2043.appspot.com'
}
firebase.initializeApp(config)

const storage = firebase.storage()

export default storage
