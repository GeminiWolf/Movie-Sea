import './App.css';
import Topbar from './Components/Topbar/Topbar';
import { useEffect, useRef, useState } from 'react';
import Mainsection from './Components/MainSection/MainSection';
import Watched from './Components/Watched/Watched';

import { searchShows, trending } from './apis';

function App() {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totPages, setTotPages] = useState(0);
  const [data, setData] = useState([]);

  const [route, setRoute] = useState('Home');

  useEffect(() => {

    return getData()

  }, [isSearch, pageNo, route])

  const getData = () => {
    if(route === "Home"){
      if(!isSearch){
        fetch(trending)
        .then((r) => r.json())
        .then((d) => {
          console.log(d)
          setData(d.results)
        })
      }
      else{
        fetch(searchShows(search, pageNo))
        .then((r) => r.json())
        .then((d) => {
          setData(d.results)
        })
      }
    }
    else{
      fetch('/api/watched')
      .then((r) => r.json())
      .then((d) => {
        console.log(d)
        // setData(d.results)
      })
    }
  }

  const switchRoute = (r) => {
    if(route === 'Home'){ 
      backToTrend()
    }
    else if(r !== 'Home') backToTrend()

    setRoute(r)
  }

  const searchSubmit = (s) => {
    setIsSearch(true)
    s.preventDefault();
  }

  const backToTrend = () => {
    setSearch('');
    setIsSearch(false);
  }

  const newResults = () => {
    if(pageNo!==totPages)
      setPageNo(pageNo+1)
  }

  return (
    <div className="App">
      <Topbar 
        search={search} 
        setSearch={setSearch} 
        backToTrend={backToTrend} 
        isSearch={isSearch} 
        searchSubmit={searchSubmit}
        route={route}
        switchRoute={switchRoute}/>

        {route === 'Home' ?
          <Mainsection 
            shows={data} 
            totPages={totPages}
            newResults={newResults}
            setPageNo={setPageNo} 
            pageNo={pageNo}/>
            :
          <Watched
            shows={data} 
          />
        }
    </div>
  );
}

export default App;
