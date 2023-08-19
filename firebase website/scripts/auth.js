const myModal = document.querySelectorAll('.modal')
async function  signup(e){
    e.preventDefault()
    const email = document.querySelector('#Signup_email');
    const password = document.querySelector('#signupassword');
    console.log(email.value , password.value)
try{
    const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  await result.user.updateProfile({
        displayName: " User",
      })
    await result.user.sendEmailVerification()



console.log(result)
M.toast({html:`welcome ${result.user.email} ` ,classes: 'rounded ' })
}catch(err){
    console.log(err)
    M.toast({html: err.message, classes: 'rounded green' })    
}
email.value = ""
email.password = ""
M.Modal.getInstance(myModal[0]).close()
  
}



async function  login(e){
    e.preventDefault()
    const email = document.querySelector('#login_email');
    const password = document.querySelector('#loginpassword');
    console.log(email.value , password.value)
try{
    const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
console.log(result)
M.toast({html:`welcome ${result.user.email} ` ,classes: 'rounded green ' })
}catch(err){
    console.log(err)
    M.toast({html: err.message, classes: 'rounded ' })
    
}
email.value = ""
email.password = ""
M.Modal.getInstance(myModal[1]).close()
  
}

function logout() {
    firebase.auth().signOut();
}


 const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user)
     
    } else {
        console.log('signout succesfully');
        M.toast({html: "signout succes", classes: 'rounded ' })
      
    }
  });

  async function loginWithgoogle(){
try{
    var provider = new firebase.auth.GoogleAuthProvider();

const result =  await firebase.auth()
  .signInWithPopup(provider)
}catch(err){
    console.log(err)
}
    
}

