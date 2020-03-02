import React from 'react';

import { auth } from '../ConfigFirebase/FirebaseInit';

class Login extends React.Component {
    handleClick = e => {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        const login = (email, password) => {

            auth.signInWithEmailAndPassword(email, password).then(result => console.log("usuario ingresado")).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = "error con el email";
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('password erroneo');
                } else {
                    alert(errorMessage);
                }
                console.log("mail y/o password erroneo")
                // [END_EXCLUDE]
            });
        }
        login(email, password)
    }
    render() {

        return (
            <div>
                <label>Email</label>
                <input type="mail" name="email" className="email" id="email" placeholder="email" />
                <label >Clave</label>
                <input type="password" name="password" className="password" id="password" placeholder="clave" />
                <button onClick={this.handleClick}>Entrar</button>
            </div>
        )
    }
};

export default Login;