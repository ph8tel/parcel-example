import React from 'react';
import styled from 'styled-components';
import {  Link } from 'react-router-dom';
import fs from 'fs';

const bufferedImage = fs.readFileSync(__dirname + '/images/puppy.jpg')


class PageTwo extends React.Component {
  constructor(props){
  	super(props);
  }

  render(){
  	
  	return(
      <div>

      This is Page Two
      
      <Link to="/">Home</Link>
      <div><img  src={'data:image/png;base64,' + bufferedImage.toString('base64')}/></div>
      </div>
  		)
  }
}
export default PageTwo;