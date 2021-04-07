import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom"
import {Button, Table} from "react-bootstrap";
import axios from 'axios';

/// Dota data import///

import dota2JsonList from "../customdata/heroes.jsx"


const Dota2Page = () => {

    const [accountID, setAccountID] = useState("")
    const [twentyMatches, setTwentyMatches] = useState([])
    const [twentyHeroes, setTwentyHeroes] = useState([])
    const [histogram, setHistogram] = useState([])
    const [table, setTable] = useState()
    const heroesList = dota2JsonList.heroes

    // time converter

    const fmtMSS = (s) => {return(s-(s%=60))/60+(9<s?':':':0')+s}


    // player ids

    const normanID = 874433847;
    const justinSmurfID = 180043529;
    const davidID = 403965761;
    const chrisID = "186044672";

    // Button Functions

   const getLastTwentyMatches= () => {
    setTwentyHeroes()
    setActive2("matches");

    axios.get('https://api.opendota.com/api/players/' + accountID + '/matches')
    .then((response)=> {const twentyMatches = response.data.slice(0,20); setTwentyMatches(twentyMatches)})
    .catch((err) => {alert("Please select a player")})}

    const getTwentyHeroes= () => {
        setTwentyMatches([])
        setActive2("heroes");
        axios.get('https://api.opendota.com/api/players/' + accountID + '/heroes')
        .then((response)=> {const twentyHeroes = response.data.slice(0,20); setTwentyHeroes(twentyHeroes)})
        .catch((err) => {alert("Please select a player")})
    }

    const getHistograms = () => {
        axios.get('https://api.opendota.com/api/players/' + accountID + '/histograms')
        .then((response)=> {const histograms = response.data.slice(0,20); setHistogram(histograms)})
        .catch((err) => {alert("Please select a player")})
    }

   const generateTable = () => {
       const theMatches = twentyMatches.map((item,key) => [item.match_id, item.hero_id, item.duration, item.kills, item.deaths, item.assists, item.player_slot])
       console.log(theMatches)
    //    const theHeroes = twentyHeroes.map((item, key) =>)
       setTable(
           theMatches.map((item, key) => 

            <tr>
                <td><a href={'https://api.opendota.com/api/players/' + accountID + '/matches/' + item[0]}>{item[0]}</a></td>
                <td>{fmtMSS(item[2])}</td>
                <td>{item[6]<6 ? "Radiant" : "Dire"}</td>
                <td><img src={heroesList.find(hero => hero.id === item[1]).url_small_portrait}></img></td> 
                <td>{item[3]}/{item[4]}/{item[5]}</td>
              </tr>
))
    } 

    const [classNames, setClassNames] = useState("dota2-button")
    const [accID, setAccID] = useState()


console.log(twentyMatches)
console.log(twentyHeroes)



const [active, setActive] = useState()
const [active2, setActive2] = useState()

console.log(active)

    return (
        <div>
        <div className="dota2-border">
        <button name="Norman" onClick={() => {setActive("Norman"); setAccountID(normanID);}} className={active==="Norman" ? "practice-button" : "dota2-clicked"}>Norman</button>
        <button name="Chris" onClick={() => {setActive("Chris"); setAccountID(chrisID);}} className={active==="Chris" ? "practice-button" : "dota2-clicked"}>Chris</button>
        <button name="David" onClick={() => {setActive("David"); setAccountID(davidID);}} className={active==="David" ? "practice-button" : "dota2-clicked"}>David</button>
        </div>
        <div className="dota2-border">
        <button onClick={getTwentyHeroes} className={active2 ==="heroes" ? "practice-button" : "dota2-clicked"}>Heroes</button>
        <button onClick={getLastTwentyMatches} className={active2 ==="matches" ? "practice-button" : "dota2-clicked"}>Matches</button>   
        </div>
        <div className="dota2-border">
        <button onClick={generateTable} className={((active & twentyMatches) || (active & twentyHeroes) ? "dota2-button" : "practice-button")}>Generate</button>    
        </div>
        <div>
        <Table style={{width: "50%"}} size="sm" responsive striped bordered hover variant="dark">
        <thead>
            <tr>
              <th style={{width: "10.66%"}}>Match ID</th>
              <th style={{width: "10.66%"}}>Time</th>
              <th style={{width: "10.66%"}}>Team</th>
              <th style={{width: "10.66%"}}>Hero</th>
              <th >K/D/A</th>
            </tr>
            {table}
          </thead>
        </Table>
        </div>
        </div>
    )
}

export default Dota2Page;