import React, { Fragment,useState,useEffect} from "react";
import { MDBBtn,MDBCol, MDBFormInline, MDBIcon,MDBInput} from "mdbreact";
import {firebase} from '../firebase'
import { MDBContainer, MDBAlert } from 'mdbreact';
import Card from 'react-bootstrap/Card'


const List = props => {
   

    

    const [user , updateuser] = useState([]);
    var check= true;
    
    const n = [];

    const db = firebase.firestore();
   
        db.settings({
        timestampsInSnapshots: true
                    });
        db.collection("Projects")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
               
        for(var i=0 ; i<data.length ; i++){
       
        
       
       n.push(data[i]);
     
    }
    if(check){updateuser(n);}
    }
    
    );
       
       
       console.log(user);
       console.log(user.length);
        if(user.length>1){check=false;}
       
      
    return (
    <div id="list">

       

        <br></br>
        
    {user.map((object, i) => 
    
    /////////////////////
    <div>
    <Card border="success" bg="light" >
    <Card.Header>{object.Name}</Card.Header>
    <Card.Body>
     
      <Card.Text >
        {object.Code}
      </Card.Text>
    </Card.Body>
  </Card><br></br>
  </div>
  
    //////////////
    
    )}
   
        
        
       
    </div>
    );
}

export default List;