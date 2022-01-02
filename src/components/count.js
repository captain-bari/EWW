import React, { Fragment,useState,useEffect} from "react";
import { Alert } from "react-bootstrap";
import {firebase} from '../firebase'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

const Count = props => {

    const [pizza , setpizza] = useState(0);    
    const [kulcha , setkulcha] = useState(0);
    const [patty , setpatty] = useState(0);
    const [sex , setsex] = useState(0);
    const [golgappe , setgolgappe] = useState(0);
    const [sting , setsting] = useState(0);
    const addPizza = () => {
        var doc = db.collection("Counts").doc("pizza");
        return doc.update({
            count: pizza+1
        })
        .then(function() {
            setpizza(pizza+1)
        })
        .catch(function(error) {
            alert("Error updating pizza count: ", error);
        });
    }
    const addpatty = () => {
        var doc = db.collection("Counts").doc("patty");
        return doc.update({
            count: patty+1
        })
        .then(function() {
            setpatty(patty+1)
        })
        .catch(function(error) {
            alert("Error updating patty count: ", error);
        });
    }
    const addKulcha = () => {
        var doc = db.collection("Counts").doc("kulcha");
        return doc.update({
            count: kulcha+1
        })
        .then(function() {
            setkulcha(kulcha+1)
        })
        .catch(function(error) {
            alert("Error updating kulcha count: ", error);
        });
    }

    const addSex = () => {
        var doc = db.collection("Counts").doc("sex");
        return doc.update({
            count: sex+1
        })
        .then(function() {
            setsex(sex+1)
        })
        .catch(function(error) {
            alert("Error updating Sex count: ", error);
        });
    }
    const addGolGappe = () => {
        var doc = db.collection("Counts").doc("golgappe");
        return doc.update({
            count: golgappe+1
        })
        .then(function() {
            setgolgappe(golgappe+1)
        })
        .catch(function(error) {
            alert("Error updating Gol gappe count: ", error);
        });
    }
    const addSting = () => {
        var doc = db.collection("Counts").doc("sting");
        return doc.update({
            count: sting+1
        })
        .then(function() {
            setsting(sting+1)
        })
        .catch(function(error) {
            alert("Error updating Sting count: ", error);
        });
    }

    const db = firebase.firestore(); 
        db.settings({
        timestampsInSnapshots: true
                    });
        db.collection("Counts")
    .get()
    .then(querySnapshot => {
        const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        for (let list in data) {
            if (data[list].id === "pizza") {
                setpizza(data[list].count)
            }
            if (data[list].id === "kulcha") {
                setkulcha(data[list].count)
            }
            if (data[list].id === "patty") {
                setpatty(data[list].count)
            }
            if (data[list].id === "sex") {
                setsex(data[list].count)
            }
            if (data[list].id === "sting") {
                setsting(data[list].count)
            }
            if (data[list].id === "golgappe") {
                setgolgappe(data[list].count)
            }
        }
    }
    
    );       
    return (
    <div id="count"  style={{ textAlign:'center',alignItems:'center',display:'inline-block'}}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./pizza.png")} />
            <Card.Body>
            <Card.Title>Pizza : {pizza}</Card.Title>
            <Card.Text>
                Ye aajkal kem ho gya hai, but it has its own place. Jab kya khaen samajh ni aata tab pizza yaad aata hai.
            </Card.Text>
                <Button variant="primary" onClick={addPizza}>Increase Count</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./kulcha.png")} />
            <Card.Body>
            <Card.Title>Kulcha : {kulcha} </Card.Title>
            <Card.Text>
                GoTo food when we broke, even so very tasty makkhan maar ke. Almost sab redi try kerli apan ne eski toh.
            </Card.Text>
                <Button variant="primary" onClick={addKulcha}>Increase Count</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./patty.png")} />
            <Card.Body>
            <Card.Title>Patty : {patty}</Card.Title>
            <Card.Text>
                Deepak paaji zindabad. Canada jake kholiyo ye business.
            </Card.Text>
                <Button variant="primary" onClick={addpatty}>Increase Count</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./sex.png")} />
            <Card.Body>
            <Card.Title>Sex : {sex}</Card.Title>
            <Card.Text>
                Sex is cool and good for health okay. Never say that only thing in relationship please, Yes we do alot of sex so what<br></br> xD , :P xoxo lick lick yummy
            </Card.Text>
                <Button variant="primary" onClick={addSex}>Increase Count</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./sting.png")} />
            <Card.Body>
            <Card.Title>Sting : {sting}</Card.Title>
            <Card.Text>
                Alag hi nasha hai bhai eeska. kiase btaen kyn tujhko chaheen.
            </Card.Text>
                <Button variant="primary" onClick={addSting}>Increase Count</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("./golgappe.png")} />
            <Card.Body>
            <Card.Title>Gol Gappe : {golgappe}</Card.Title>
            <Card.Text>
                Soooji ke gol gappe. First dish we tried this year (new year EVE ik same thing just stfu please, and add +1 to sex also while calcuating cuz same thing)<br></br> -_-
            </Card.Text>
                <Button variant="primary" onClick={addGolGappe}>Increase Count</Button>
            </Card.Body>
        </Card>
     </div>
    );
}

export default Count;