import React, {components, useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Dash from "./components/dash"
import {firebase} from './firebase'




function App() {

  const [user , updateuser] = useState(false);
  

  useEffect(() => {
   // firebase.auth().signOut().then(() => {console.log('Signed Out');}).catch(e=>{console.error('Sign Out Error', e);});
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        updateuser(true);
        console.log(user.email);
        var currentdate = new Date(); 
        var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                console.log(datetime);
                const db = firebase.firestore();
                db.settings({
                timestampsInSnapshots: true
                            });
                db.collection(user.email)
                .add({
                   Date : datetime
                }).then(doc => {console.log(doc)}).catch((err) => {alert(err.message);});
            
      
      } else {
        updateuser(false);
      }
    });


  }, [])
 
  
  return (
    <div className="App">
      
      { user ? (<Dash/>) : (<Login/>)}
    
      
    </div>
  );
}

export default App;
