import React from 'react';

import { provider } from '../ConfigFirebase/FirebaseInit';
import { auth } from '../ConfigFirebase/FirebaseInit';

class LoginGoogle extends React.Component {
    handleClick = e => {
        const authGoogle = (provider) => {
            auth.signInWithPopup(provider)
                .then(function (result) {
                    //Esto le proporciona un token de acceso de Google. Puede usarlo para acceder a la API de Google.
                    var token = result.credential.accessToken;
                    console.log(token)
                    //La información de usuario que ha iniciado sesión.
                    var user = result.user;
                    console.log(user)

                })
                .catch(function (error) {
                    // Manejar errores aquí.
                    var errorCode = error.code;
                    console.log(errorCode)
                    var errorMessage = error.message;
                    console.log(errorMessage)
                    // El correo electrónico de la cuenta del usuario utilizado.
                    var email = error.email;
                    console.log(email)
                    //El tipo firebase.auth.AuthCredential que se utilizó.
                    var credential = error.credential;
                    console.log(credential)
                });
        }
        authGoogle(provider)
    }
    render() {

        return (
            <div>
                <button onClick={this.handleClick}>Google</button>
            </div>
        )
    }
};

export default LoginGoogle;