import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import AddEdit from './pages/AddEdit';
import Auth from './pages/Auth';
import Reject from './pages/Reject';
import Join from './pages/Join';
import Delete from './pages/Delete';
import Compare from './pages/Compare';
import SideBar from './components/Sidebar';
import NavBarElements from './components/Navbar/NavBarElements';

function App() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      paddingTop: '85px', // Same as nav height
      position: 'relative'
    }}>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1001,
      }}>
        <NavBarElements />
      </header>
        <Router>
          <Routes>
            <Route path = "/" element = { <Main />} />
	    <Route path = "/addport" element= { <AddEdit />} />
	    <Route path = "/auth" element = { <Auth/> }/>
	    <Route path = "/Reject" element = { <Reject />} />
	    <Route path = "/Join" element = {<Join /> } />
	    <Route path = "/Compare" element = { <Compare />} />
	    <Route path = "/reject/:id" element = { <Delete/>} />
	    <Route path = "/side" element = { <SideBar/>} />
         </Routes>
      </Router>	  
  </div>
   );
}
export default App;
