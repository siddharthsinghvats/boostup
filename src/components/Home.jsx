import Card from "./Card";
import {AiOutlineHeart} from 'react-icons/ai'
import business from "../data";
import { useState } from "react";

const Home = () => {
  const [businesses, setBusinesses] = useState(business);
  const [locality, setLocality] = useState("");
  const handleSort = ()=>{
    const data = [...businesses];
    data.sort((a, b) => b.likes - a.likes);
    setBusinesses(data);
  }

  function handleSearch() {
    if(locality===""){
        setBusinesses(business);
        return;
    }

    var arr=[];
    const data = [...businesses];
    var x = locality.charAt(0).toUpperCase()+locality.slice(1);
    arr= data.filter(obj => obj.locality.startsWith(x));
    setBusinesses(arr);
  }
  return (
    <>
      <div className="navbar">
        <div className="logo">Local Express</div>
        <div className="right-nav">
          <div className="search">
            <input type="text" placeholder="Search by locality" value={locality} onChange={(event)=>setLocality(event.target.value)}/>
            <button onClick={()=>handleSearch()}>Search</button>
          </div>

          <button className="filter" onClick={()=>{handleSort()}}>Filter by Likes</button>
        </div>
      </div>
      (
      <div className="card-container">
        {businesses.map((item,idx) => (
          <Card card={item} key={item.title+"*"+idx}/>
        ))}
      </div>
      <div className="footer">
        Made with <span className="heart"><AiOutlineHeart/></span>  by Siddharth
      </div>
      )
    </>
  );
};

export default Home;
