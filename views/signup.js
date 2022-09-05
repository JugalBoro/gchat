function signup(event){
    event.preventDefault();
    

    const userDetails = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value
    }
    console.log(userDetails);

    axios.post('http://localhost:4000/user/signup',userDetails)
    .then(res=>{
        if(res.status===201){
            // alert('User Created Successfully! Please Login....')
            alert(`${res.data.message}`)
            console.log(res);
        // window.location.href = "/login/login.html";
        }
    })
    .catch(err=>{
        // console.log(err);
        alert(`${err.response.data.message}`)
        //window.location.href = "/login/login.html";
    })
}