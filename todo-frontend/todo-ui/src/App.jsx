import './App.css'
import ListTodoComponent from './components/ListTodoComponent'
import HeaderComponent from './components/HeaderComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent'


function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/' element = { <ListTodoComponent />}></Route>
          <Route path='/todos' element={<ListTodoComponent/>}></Route>
        </Routes>
      <FooterComponent/>
    
    </BrowserRouter>
    </>
  )
}

export default App
