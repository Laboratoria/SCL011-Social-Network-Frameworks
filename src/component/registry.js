import React from 'react';

import { auth } from '../ConfigFirebase/FirebaseInit';

class Registry extends React.Component {
    handleChange = e => {
        console.log({
            email: e.target.email,
            value: e.target.value
        });
    };
    // al hacer click haga la funcion
    handleClick = e => {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        console.log(email, password);
        const createAccount = (email, password) => {
            auth.createUserWithEmailAndPassword(email, password, name)
                .then(result => {
                    //result user es igual a usuario de cuenta creada
                    console.log(result.user)
                    result.user.updateProfile({
                        display: result.user
                    });
                    // 2 creamos el envio de mensaje de verificación y su configuración, configuramos para ue se redireccione el link de verificacion que llega l email
                    const configuracion = {
                        url: 'http://localhost:3000'
                    }
                    // 1 envio de mensaje de verificacion
                    result.user.sendEmailVerification(configuracion)
                        // capturar si existe algun error
                        .catch(err => {
                            alert(err.menssage)
                        })
                    //3 si el usuario no esta verificado no puee ver la pagina
                    auth.signOut()
                    alert(
                        `Bienvenido ${name}, verifica tu email, por favor.`
                    )
                })
                // 1 error de registro
                .catch(err => {
                    console.error(err.message)
                })
        };
        createAccount(email, password);
    };
    //funcion para que el boton solo tenga su funcionalidad de boton y no se envie
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submitted")
    };

    render() {
        return (
            <div className="container-principal">
                <form className="container-form" onSubmit={this.handleSubmit} >
                    <div className="container-title-registry">
                        <h3>Registrate</h3><br />
                    </div><h5>Registro</h5>
                    <label className="title-label" >Nombre</label>
                    <input onChange={this.handleChange} type="text" name="name" id="name" className="name" />
                    <label className="title-label" >Correo</label>
                    <input onChange={this.handleChange} type="email" name="email" id="email" className="email" />
                    <label className="title-label" >Contraseña</label>
                    <input onChange={this.handleChange} type="password" name="password" id="password" className="password" />
                    <button onClick={this.handleClick} id="btnRegistry" className="btn-create-account">Crear cuenta</button>
                </form>


            </div >
        )
    };
};
export default Registry;