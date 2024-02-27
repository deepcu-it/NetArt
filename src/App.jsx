import './App.css'
import Header from './components/Header.jsx'
import Component from './components/Component.jsx'
import Footer from './components/Footer.jsx'

const App = ()=> {
    return (
      <div className='app-body'>
        <Header/>  
        <Component/>
        <Footer/>
      </div>
    )
}

export default App
