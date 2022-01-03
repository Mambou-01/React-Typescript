import React, { FunctionComponent, useState, useEffect} from 'react';
import { OrdinateurList } from './components/OrdinateurList';
import Ordinateur from './components/Ordinateur';
import Search from './components/Search';
import Home from './components/Home';
import Select from './components/Select';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Link
 } from "react-router-dom";

 
const App: FunctionComponent = () => {
   const [data, setData] = useState<Ordinateur[]>([]);
   const [inputValue,setInputValue] = useState<string>("");

   useEffect(() => {
         setData(listOrdinateur);
     }, [inputValue]);


 const listOrdinateur = 
 [
   {
      id:1,
      url:"https://www.mytek.tn/pc-portable-asus-celeron-n4020-4go-1to-gris-x543ma-gq1012t.html",
      urlImage:"https://mk-media.mytek.tn/media/catalog/product/cache/9c5129f729280efd61dc2c3fb7aaab1d/x/5/x543ma-gq1012t.jpg",
      designation:"PC Portable ASUS X543MA Celeron N4020 4Go 1To - Gris (X543MA-GQ1012T)",
      prix:"819,000",
      ram:"4 Go",
      systeme:"Windows 10",
      processeur:"Intel Celeron",
      CarteGraphique:"Intel HD",
      disqueDur:"1 To"
   },
   {
      id:2,
      url:"https://www.mytek.tn/pc-portable-hp-15-dw1000nk-dual-core-4go-1to-noir-280s8ea.html",
      urlImage:"https://mk-media.mytek.tn/media/catalog/product/cache/9c5129f729280efd61dc2c3fb7aaab1d/2/8/280s8ea_1.jpg",
      designation:"PC Portable HP 15-dw1000nk Dual Core 4Go 1To - Noir (280S8EA)",
      prix:"909,000",
      ram:"4 Go",
      systeme:"Windows 10",
      processeur:"Intel Celeron",
      CarteGraphique:"Intel HD",
      disqueDur:"1 To"
   }
]

 return (
  <div>
     <Router>
      <div>
      <header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
              <Link className="nav-link px-2 text-white" to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-white" to="/select">Select</Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-white" to="/search">Search</Link>
            </li>
        </ul>

      </div>
    </div>
  </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/select">
            <Select />
          </Route>
          <Route path="/search">
               <Search value ={inputValue} handleChange={(e) => {
                  setInputValue(e.target.value);
               }}/>
               <OrdinateurList  infos={data}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
     
     
     
  </div>
  );
}
 
export default App;