import React, { Fragment,useState} from "react";
import { MDBBtn,MDBCol, MDBFormInline, MDBIcon,MDBInput} from "mdbreact";
import {firebase} from '../firebase'
import { MDBContainer, MDBAlert } from 'mdbreact';



const List = props => {
   

    
    const db = firebase.firestore();
        
        db.settings({
        timestampsInSnapshots: true
                    });
        db.collection("Projects")
        .get()
        .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());;
        console.log(data); 
        
        for(var i=0 ; i<data.length ; i++){
        var node = document.createElement(`MDBContainer`); 
        var alert = document.createElement("MDBAlert"); 
        
            alert.setAttribute("color", "dark");
        var head = document.createElement("h4");
           
            head.setAttribute("className", "alert-heading");
        var hr = document.createElement("br");
        var line = document.createElement("hr");
        var p = document.createElement("p");
           
            p.setAttribute("className", "mb-0");                         
        var textnode = document.createTextNode(data[i].Name);
             head.appendChild(textnode); 
        var textnode2 = document.createTextNode(data[i].Code);  
            p.appendChild(textnode2); 
            
        alert.appendChild(hr);alert.appendChild(hr);
        alert.appendChild(head);
        alert.appendChild(hr);
        alert.appendChild(p);
        alert.appendChild(hr);alert.appendChild(hr);
        alert.appendChild(line);
        node.appendChild(alert);

       
                            
        document.getElementById("list").appendChild(node);
        }
       
        
        
        
        });
       
       

    return (
    <div id="list">

       

        <br></br>
        
       
    </div>
    );
}

export default List;