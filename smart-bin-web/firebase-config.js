// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0QYDKihFu2i97B0j1SacWtQ5pHsuSrfQ",
    authDomain: "smartgarbagebin-16c5e.firebaseapp.com",
    databaseURL: "https://smartgarbagebin-16c5e-default-rtdb.firebaseio.com",
    projectId: "smartgarbagebin-16c5e",
    storageBucket: "smartgarbagebin-16c5e.firebasestorage.app",
    messagingSenderId: "516876758691",
    appId: "1:516876758691:web:e97fc9091ab667284a5916"
};

// Initialize Firebase
if (!firebase.apps?.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();