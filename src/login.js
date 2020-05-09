import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase'
import SignIn from './signIn';
import Carta from './carta';
import Button from '@material-ui/core/Button';
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component{

    render(){
        const{ user, signOut,  signInWithGoogle } = this.props;
        return(     
            <div>
                {
                    user
                    ? <div>
                        <p>Hola  {user.displayName}</p>
                        <Carta/>
                        <Button onClick={signOut} color="secondary">Cerrar sesion</Button>
                      </div>
                    : <SignIn signGoogle={signInWithGoogle}/>
                       
                      
                }
             
            </div>
          
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),

};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);