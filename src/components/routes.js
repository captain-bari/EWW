import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Add from './add';
import List from './list';




class Routes extends React.Component {
  render() {
    return (
      <Switch>
        
       
        <Route path='/add' component={Add} />
        
        <Route path='/show' component={List} />
      
       
        
      </Switch>
    );
  }
}

export default Routes;
