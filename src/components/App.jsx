import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styled from 'styled-components'
import './styles.css'

// Routes
import Home from './Home.jsx'
import PageTwo from './PageTwo.jsx'



class App extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){

  	return(
		<Router>
    <div>
    <Link to='/page-two'>Page Two</Link>
    <Route exact path='/' component={Home} />          
    <Route path='/page-two' component={PageTwo} />          
    </div>
		</Router>
  		)
  }
  


}
export default App;