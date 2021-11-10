import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Actionsection} from './components/menusection.js';
import {addcanvas} from './components/Addingcanvas.js'

function Container(){
  return(
    <div className='containerbox'>
    <div className='headingtext'>BST VISULIZATION</div>
      <Actionsection/>
      <addcanvas/>

    </div>

  );
}


ReactDOM.render(
 <Container/>,
  document.getElementById('root')
);


