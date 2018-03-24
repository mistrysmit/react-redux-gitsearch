import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import RouteComp from './Component/UI/RouterCom';
import Menu from './Component/UI/Menu';
import Search from './Component/Controller/Search';
import SearchResult from './Component/UI/SearchResult';
import { searchData } from './Component/Store/action'


class App extends Component {


  render() {
    return (

      <div>   
        <RouteComp>
          <Menu>
            <Search userorrepo='users' ></Search>
          </Menu>
          <SearchResult  ></SearchResult>
        </RouteComp>
      </div>
      
    );
  }
}

export default App;
