import React from 'react'
import { Link, useParams } from 'react-router-dom'

export const TeamDetails = () => {

  const teamlist = [
    {id:1, name:"RCB", captain:"Rajat Patidar", homeground:"M. Chinnaswamy Stadium", trophies:1},
    {id:2, name:"PBKS", captain:"Shikhar Dhawan", homeground:"IS Bindra Stadium", trophies:0},
    {id:3, name:"RR", captain:"Sanju Samson", homeground:"Sawai Mansingh Stadium", trophies:1},
    {id:4, name:"SRH", captain:"Pat Cummins", homeground:"Rajiv Gandhi International Stadium", trophies:1},
    {id:5, name:"MI", captain:"Hardik Pandya", homeground:"Wankhede Stadium", trophies:5},
    {id:6, name:"GT", captain:"Shubman Gill", homeground:"Narendra Modi Stadium", trophies:1},
    {id:7, name:"KKR", captain:"Shreyas Iyer", homeground:"Eden Gardens", trophies:3},
    {id:8, name:"LSG", captain:"KL Rahul", homeground:"BRSABV Ekana Stadium", trophies:0},
    {id:9, name:"CSK", captain:"Ruturaj Gaikwad", homeground:"MA Chidambaram Stadium", trophies:5},
    {id:10, name:"DC", captain:"Rishabh Pant", homeground:"Arun Jaitley Stadium", trophies:0}
];
  const id = useParams().id
  const foundTeam = teamlist.find((t)=>t.id == id)
  return (
    <div style={{textAlign : "center"}}>
        <h1>TeamDetails{id}</h1>
        <h2>Name = {foundTeam.name}</h2>
        <h2>Captain = {foundTeam.captain}</h2>
        <h2>HomeGround = {foundTeam.homeground}</h2>
        <h2>Trophies = {foundTeam.trophies}</h2>
    </div>
  )
}
