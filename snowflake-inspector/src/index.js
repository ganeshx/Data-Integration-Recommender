'use strict';

import sample_data from './data/sample_hierarchy_data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'bootstrap';

import {render} from './js/hierarchy_vis.js';
import init_modal from './js/new_hierarchy_modal.js';


// main
document.addEventListener("DOMContentLoaded", function(){
  init_modal();
  
  //load data
  render(sample_data);
});