import React, { Fragment,useState,useEffect} from "react";
import { Alert } from "react-bootstrap";
import {firebase} from '../firebase'


const Count = props => {

    const [pizza , setpizza] = useState(10);    
    const [kulcha , setkulcha] = useState(10);
    const [patty , setpatty] = useState(10);
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
        }
    }
    
    );       
    return (
    <div id="count">
        Pizza : {pizza} <button onClick={addPizza}>Increase Pizza Count</button><br></br>
        Kulcha : {kulcha} <button onClick={addKulcha}>Increase Kulcha Count</button><br></br>
        Patty : {patty} <button onClick={addpatty}>Increase Kulcha Count</button><br></br>
    </div>
    );
}

export default Count;