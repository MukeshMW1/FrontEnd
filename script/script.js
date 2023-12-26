const _login = () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;



    //check if entered values are correct or not


    if (email === "AI@gmail.com" && password === "AIT") {
        window.location.href = "../html/next.html"
    }

    else {
        alert("Invalid email and password, please try again")
    }




    console.log(email, password)
}

