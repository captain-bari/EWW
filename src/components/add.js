import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {firebase} from '../firebase'
import { MDBBadge, MDBContainer } from "mdbreact";
import { MDBBtn } from "mdbreact";
import { MDBInputGroup } from "mdbreact";




const Add= props => {

    const add = () => {
        var pname = document.getElementById("pname").value;
       
        var code = document.getElementById("code").value;
        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
                    });
        db.collection("Projects")
        .add({
            Name : pname,Code : code
        }).then(doc => {alert("Rule added")}).catch((err) => {alert(err.message);});
    }

    return (
        <div>
            
            <Card className="text-center" >
            <Card.Body>
            
            <Card.Text>
                <MDBContainer>
                <MDBInputGroup material containerClassName="mb-3 mt-0"  hint="Title" id="pname"/>
               
                <MDBInputGroup
                        material
                        className="mb-0"
                        hint="Details"
                        type="textarea" id="code"/>
                        
                </MDBContainer>
            </Card.Text>
            <MDBBtn rounded outline color="success" onClick={add}>Add Rule</MDBBtn>
               
            </Card.Body>
            
            </Card>

        </div>
    );
}

export default Add;