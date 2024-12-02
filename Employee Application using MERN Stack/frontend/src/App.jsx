import './App.css'
import { Route, Routes } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import Login from './components/Login'
import AddEmployee from './components/AddEmployee'
import Main from './components/Main'
import Signup from './components/Signup'

function App() {
  return (
    <>

<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/signup' element={<Signup/>}></Route>
  <Route path='/employeelist' element={<Main child={<EmployeeList/>}/>}></Route>
  <Route path='/addemployee' element={<Main child={<AddEmployee/>}/>}></Route>
</Routes>
    </>
  )
}

export default App
