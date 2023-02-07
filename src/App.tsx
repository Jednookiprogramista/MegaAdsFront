import React, {useState} from 'react';

import {Map} from "./components/Map/Map"
import {Header} from "./components/layout/Header";
import {SearchContext} from "./contexts/search.contexts";

export const App = () =>  {


    const [search,setSearch] = useState('');

  return (
      <>
            <SearchContext.Provider value={{search,setSearch}}>
                <Header/>
                <Map/>

            </SearchContext.Provider>
      </>
  );
};


