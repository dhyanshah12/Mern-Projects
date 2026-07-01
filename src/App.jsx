import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
//  import { Task } from './components/Task'
import { Route, Routes } from 'react-router-dom'
import { NetflixNewHome } from './components/Netflix/NetflixNewHome'
import { NetflixShow } from './components/Netflix/NetflixShow'
import { NavBar } from './components/NavBar'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo1 } from './components/MapDemo1'
import { Error404 } from './components/Error404'
import { Watch } from './components/Watch'
import { NetflixMovies } from './components/Netflix/NetflixMovies'
import { IplTeam } from './components/IPL/IplTeam'
import { Watch1 } from './components/IPL/Watch1'
import { TeamDetails } from './components/IPL/TeamDetails'
import { Sports } from './components/Sports'
import { SportsDetails } from './components/SportsDetails'
import { PlayeDetails } from './components/PlayeDetails'
import { Students } from './components/Students'
import { StudentResult } from './components/StudentResult'
import { UseStateDemo1 } from './components/USESTATE/UseStateDemo1'
import { UseStateDemo2 } from './components/USESTATE/UseStateDemo2'
import { UseStateDemo3 } from './components/USESTATE/UseStateDemo3'
import { UseStateDemo4 } from './components/USESTATE/UseStateDemo4'
import { UseStateDemo5 } from './components/USESTATE/UseStateDemo5'
import { UseStateDemo6 } from './components/USESTATE/UseStateDemo6'
import { UseStateDemo7 } from './components/USESTATE/UseStateDemo7'
import { Employee } from './components/Employee'

import { Students1 } from './components/PROPS/Students1'
import { TableDemo1 } from './components/Tables/TableDemo1'
import { TableDemo2 } from './components/Tables/TableDemo2'
import { MyTable } from './components/Tables/MyTable'
import { Book } from './components/BooksTask/Book'
import { FormDemo1 } from './components/Form/FormDemo1'
import { FormDemo2 } from './components/Form/FormDemo2'
import { FormDemo3 } from './components/Form/FormDemo3'
import { FormDemo4 } from './components/Form/FormDemo4'
import { FormTask1 } from './components/Form/FormTask1'
import { FormWatch } from './components/Form/FormWatch'
import { FormSteper } from './components/Form/FormSteper'
import { ApiDemo22 } from './components/Api/ApiDemo22'
import { Login } from './components/Api/Login'
import { APiDemo2 } from './components/Api/APiDemo2'
import { ApiDemo1 } from './components/Api/ApiDemo1'
import { ApiTask1 } from './components/Api/ApiTask1'
import { ApiTask2 } from './components/Api/ApiTask2'
import { Bounce, ToastContainer } from 'react-toastify'
import { Item } from './components/Api/Item'
import { UpdateUser } from './components/Api/UpdateUser'
import { InputDemo2 } from './components/InputDemo2'
import { InputDemo1 } from './components/InputDemo1'
import { AddProducts } from './components/Api/AddProducts'
import { UseRefDemo1 } from './components/UseRefDemo1'
import { UseRefDemo2 } from './components/UseRefDemo2'
import { UseRefTask1 } from './components/UseRefTask1'




function App() {

  return (
    <div>
<ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <NavBar></NavBar>
      <Routes>
        <Route path='/netflixnewhome' element={<NetflixNewHome />}></Route>
        <Route path='/netflixshow' element={<NetflixShow />}></Route>
        <Route path='/' element={<MapDemo6 />}></Route>
        <Route path='/*' element={<Error404 />}></Route>
        <Route path='/watch/:name' element={<Watch />}></Route>
        <Route path='/netflixmovies' element={<NetflixMovies />}></Route>
        <Route path='/iplteam' element={<IplTeam />}></Route>
        <Route path='/teamdetails/:id' element={<TeamDetails />}></Route>
        <Route path='/watch1/:id' element={<Watch1 />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
        <Route path='/sportsdetails/:id' element={<SportsDetails />}></Route>
        <Route path='/playerdetails/:id' element={<PlayeDetails />}></Route>
        {/* /* <Route path='/students' element = {<Students/>}></Route> */}
        <Route path='/student/:id' element={<StudentResult />}></Route>
        <Route path='/usestatedemo1' element={<UseStateDemo1 />}></Route>
        <Route path='/usestatedemo2' element={<UseStateDemo2 />}></Route>
        <Route path='/usestatedemo3' element={<UseStateDemo3 />}></Route>
        <Route path='/usestatedemo4' element={<UseStateDemo4 />}></Route>
        <Route path='/usestatedemo5' element={<UseStateDemo5 />}></Route>
        <Route path='/usestatedemo6' element={<UseStateDemo6 />}></Route>
        <Route path='/usestatedemo7' element={<UseStateDemo7 />}></Route>
        <Route path='/Employee' element={<Employee />}></Route>
        <Route path='/inputdemo1' element={<InputDemo1/>}></Route>
        <Route path='/InputDemo2' element={<InputDemo2 />}></Route>
        <Route path='/students1' element={<Students1 />}></Route>
        <Route path='/mytable' element = {<MyTable/>}></Route>
        <Route path='/tabledemo1' element={<TableDemo1/>}></Route>
        <Route path='/tabledemo2' element={<TableDemo2/>}></Route>
        <Route path='/book' element={<Book/>}></Route>
        <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
        <Route path='/formdemo3' element={<FormDemo3/>}></Route>
        <Route path='/formdemo4' element={<FormDemo4/>}></Route>
        <Route path='/formTask1' element={<FormTask1/>}></Route>
         <Route path='/formwatch' element={<FormWatch/>}></Route>
         <Route path='/formsteper' element={<FormSteper/>}></Route>
         <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
         <Route path='/apidemo2' element={<APiDemo2/>}></Route>
         <Route path='/apidemo22' element={<ApiDemo22/>}></Route>
         <Route path='/apitask1/:id' element={<ApiTask1/>}></Route>
         <Route path='/apitask2' element={<ApiTask2/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/updateuser/:id' element={<UpdateUser/>}></Route>
         <Route path='/item' element={<Item/>}></Route>
         <Route path='/addproducts' element={<AddProducts/>}></Route>
         <Route path='/useref' element={<UseRefDemo1/>}></Route>
          <Route path='/useref2' element={<UseRefDemo2/>}></Route>
          <Route path='/usereftask' element={<UseRefTask1/>}></Route>
      </Routes>
    </div>
  )
}

export default App

