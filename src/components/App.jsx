import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import './styles.css'

// Routes
import Home from './Home.jsx'

const Wrapper = styled.div`
   max-width: 1200px;
   margin: 0 auto;
   font: 1.2em Helvetica, arial, sans-serif;
   color: #fffce1;
   padding: 5px;
   border: 1px solid;
`;

class App extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){

  	return(
		<Router>
    <Route exact path='/' component={Home} />          
		</Router>
  		)
  }
  


}
export default App;