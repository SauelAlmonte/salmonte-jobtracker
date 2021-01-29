firebase.auth().onAuthStateChanged((user)=> {
    if(user){
        console.log('user:', user)

    }   else{
        // user doesn't exist
        window.location.href = 'http://index.html'
    }
})