import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const NavBar = () => {

  const navigate = useNavigate()
  const logoutHandler = () => {

    localStorage.clear()
    document.cookie = "token=; max-age=0; path=/;";
    navigate("/login")
  }
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/netflixnewhome">NetFlix Home <span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/netflixshow">NetFlix Shows <span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/netflixmovies">NetFlix Movies <span class="sr-only">(current)</span></Link>
            </li>

            {/* <li class="nav-item active">
              <Link class="nav-link" to="/iplteam">Teams <span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/sports">Sports <span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/students">Student <span class="sr-only">(current)</span></Link>
            </li> */}

            {/* <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo1">UseStateDemo1 <span class="sr-only">(current)</span></Link>
        </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo2">UseStateDemo2<span class="sr-only">(current)</span></Link>
        </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo3">UseStateDemo3<span class="sr-only">(current)</span></Link>
        </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo4">UseStateDemo4<span class="sr-only">(current)</span></Link>
        </li>
      
      <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo5">UseStateDemo5<span class="sr-only">(current)</span></Link>
        </li> */}

            {/* <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo6">UseStateDemo6<span class="sr-only">(current)</span></Link>
        </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/usestatedemo7">UseStateDemo7<span class="sr-only">(current)</span></Link>
        </li>

      <li class="nav-item active">
        <Link class="nav-link" to="/Employee">Employee<span class="sr-only">(current)</span></Link>
        </li>
    */}
      {/* <li class="nav-item active">
        <Link class="nav-link" to="/inputdemo1">InputDemo1<span class="sr-only">(current)</span></Link>
    </li>  */}
             {/* <li class="nav-item active">
        <Link class="nav-link" to="/inputdemo2">InputDemo2<span class="sr-only">(current)</span></Link>
        </li> */}

            {/* <li class="nav-item active">
        <Link class="nav-link" to="/students1">Students1<span class="sr-only">(current)</span></Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to="/tabledemo1">TableDemo1<span class="sr-only">(current)</span></Link>
        </li>

        <li class="nav-item active">
        <Link class="nav-link" to="/tabledemo2">TableDemo2<span class="sr-only">(current)</span></Link>
        </li> */}

            {/* <li class="nav-item active">
              <Link class="nav-link" to="/book">Book<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo1">FormDemo1<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo2">FormDemo2<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo3">FormDemo3<span class="sr-only">(current)</span></Link>
            </li> */}

            <li class="nav-item active">
              <Link class="nav-link" to="/formdemo4">FormDemo4<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formtask1">FormTask1<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formwatch">FormWatch<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/formsteper">FormSteper<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo1">ApiDemo1<span class="sr-only">(current)</span></Link>
            </li>


            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo2">ApiDemo2<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/apidemo22">ApiDemo22<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/apitask1">ApiTask1<span class="sr-only">(current)</span></Link>
            </li>


            <li class="nav-item active">
              <Link class="nav-link" to="/apitask2">ApiTask2<span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/login">Login<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/item">Item<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <Link class="nav-link" to="/addproducts">AddProducts<span class="sr-only">(current)</span></Link>
            </li>

            <li class="nav-item active">
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
