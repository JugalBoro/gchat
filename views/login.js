function login(e){
    e.preventDefault();
    

    const userDetails = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }
    console.log(userDetails);

    axios.post('http://localhost:4000/user/login',userDetails)
    .then(res=>{
        if(res.status === 200){
            localStorage.setItem('authToken',res.data.token);
            //window.location.href = "../index/homepage.html"
            alert('yahoooo');
        }
    })
    .catch(err=>{
        console.log(err);
        alert(`${err.res.data.message}`)
        if(err.res.status===400){
            window.location.href="../signup/signup.html"
        }
        if(err.res.status===404){
            window.location.href="../404.html"
        }
    })
}