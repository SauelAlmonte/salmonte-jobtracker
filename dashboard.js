firebase.auth().onAuthStateChanged((user)=> {
    if(user){

        document.querySelector('#user')
            .innerHTML = `${user.displayName}`
        // console.log('user:', user)

    }   else {
        // user doesn't exist
        window.location.href = 'http://localhost:5500/index.html'
    }
})