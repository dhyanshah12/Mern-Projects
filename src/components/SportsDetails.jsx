import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const SportsDetails = () => {

    const spd = [
        {
            id: 1,
            name: "Cricket",
            players: "11",
            teams: 2,
            origin: "England",
            knownplayer: [
                { id: 1, name: "Sachin Tendulkar" },
                { id: 2, name: "Virat Kohli" }
            ]
        },
        {
            id: 2,
            name: "Football",
            players: "11",
            teams: 3,
            origin: "England",
            knownplayer: [
                { id: 1, name: "Lionel Messi" },
                { id: 2, name: "Cristiano Ronaldo" }
            ]
        },
        {
            id: 3,
            name: "Hockey",
            players: "11",
            teams: 2,
            origin: "India",
            knownplayer: [
                { id: 1, name: "Dhyan Chand" }
            ]
        },
        {
            id: 4,
            name: "Volleyball",
            players: "6",
            teams: 2,
            origin: "USA",
            knownplayer: [
                { id: 1, name: "Karch Kiraly" }
            ]
        },
        {
            id: 5,
            name: "Tennis",
            players: "1 or 2",
            teams: 2,
            origin: "France",
            knownplayer: [
                { id: 1, name: "Roger Federer" },
                { id: 2, name: "Rafael Nadal" }
            ]
        }
    ];

    const id = useParams().id
    const founsdtl = spd.find((s) => s.id == id)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>SportsDetails{founsdtl.id}</h1>
            <h2>Name = {founsdtl.name}</h2>
            <h2>Players = {founsdtl.players}</h2>
            <h2>Teams = {founsdtl.teams}</h2>
            <h2>Og = {founsdtl.origin}</h2>
            {
                founsdtl.knownplayer.map((fd)=>{
                    return <li>
                        <h2>KnownPlayer = {fd.name}</h2>
                        <Link to = {`/playerdetails/${fd.id}`}>{fd.name}</Link>
                    </li>
                })
            }
        </div>

    )
}




// Sports[c]: --> 5 sports -> array {id:1,name:"cricket"}
// SportsDetail[c]-->id -->sports detail -->{id:1,name:"cricket",players:"11",teams:2,origin,knownplayer:[{id:1,name:"sachin"}]}