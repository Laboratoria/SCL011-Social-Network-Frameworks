import React from 'react';
import firebase from 'firebase';
import './App.css';

class App extends React.Component {

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .cath(error => console.log(`Error ${error.code}: ${error.message}`))
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleAuth}>Google</button>
      </div>
    );
  }
};

export default App;
