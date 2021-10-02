import { render } from 'react-dom';
import React from 'react';
import Menu from './components/Menu';
import recipes from './data/recipes.json';

render(<Menu recipes={recipes} />, document.getElementById("root"));
