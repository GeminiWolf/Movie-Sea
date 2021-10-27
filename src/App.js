import './App.css';
import Topbar from './Components/Topbar.jsx/Topbar';
import { useEffect, useState } from 'react';
import Mainsection from './Components/MainSection/MainSection';
import { searchShows, trending } from './apis';

function App() {
  const [search, setSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [totPages, setTotPages] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {

    return getData()

  }, [isSearch, pageNo])

  const getData = () => {
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
        searchSubmit={searchSubmit}/>
      <Mainsection 
        shows={data} 
        totPages={totPages}
        newResults={newResults}
        setPageNo={setPageNo} 
        pageNo={pageNo}/>
    </div>
  );
}

export default App;
