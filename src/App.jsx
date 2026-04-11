
import{Routes,Route} from 'react-router-dom'

import Home from './components/home.jsx'
import Services from './components/services.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'

function App(){
    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    )
}
export default App;