import "./list.css";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext";
import {  updateList } from "../../context/listContext/apiCalls";

export default function List() {
  const location = useLocation();
  const list1 = location.list;
  const history = useHistory()
  console.log("previous list class",list1);
  const [list, setList] = useState(null);
  console.log("new list class",list);
  const { dispatch } = useContext(ListContext);



  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(list,list1._id, dispatch);
    history.push("/lists")
  };
  // const handleSelect = (e) => {
  //   let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setList({ ...list, [e.target.name]: value });
  // };
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        
          <button className="productAddButton">Create</button>
        
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list1.listTitle}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list1._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list1.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list1.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list1.listTitle}
            name="listTitle"
            onChange={handleChange} />
            <label>Type</label>
            <input type="text" placeholder={list1.type} 
            name="type"
            onChange={handleChange}/>
            <label>Genre</label>
            <input type="text" placeholder={list1.genre} 
            name="genre"
            onChange={handleChange} />
          </div>
          <div className="productFormRight">
            <button className="productButton"onClick={handleSubmit}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
