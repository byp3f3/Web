import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartItem from './components/CartItem';
import {Route, Routes}  from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import Overlay from './components/Overlay';
import Liked from './components/Liked';
import Home from './components/Home';
import About from './components/About'


export const AppContext = React.createContext({});
function App() {

    // const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [overlayItems, setoverlayItems] = useState([])
    const [likedItems, setLikedItems] = useState([])
    const [search, setSearch] = useState('')
    useEffect (() => {
      async function axiosData(){
        const cartData = await axios.get('http://localhost:3001/cart');
        const overlayData = await axios.get('http://localhost:3001/overlay');
        const likedData = await axios.get('http://localhost:3001/liked')
        setCart(cartData.data);
        setoverlayItems(overlayData.data);
        setLikedItems(likedData.data);
      }
      axiosData();
    }, [])
    
    const isAdded = (myid) =>{
      return overlayItems.some((objisAdded) => objisAdded.myid === myid)
    }

    const isLiked = (myid) =>{
      return likedItems.some((objisLiked) => objisLiked.myid === myid)
    }


    const deleteItem = (id) =>{
      axios.delete(`http://localhost:3001/overlay/${id}`)
      setoverlayItems((over) => over.filter(item => Number(item.id) !== Number(id)));
    }

    const deleteLikedItem = (id) =>{
      axios.delete(`http://localhost:3001/liked/${id}`)
      setLikedItems((over) => over.filter(item => Number(item.id) !== Number(id)));
    }

    const total_price = overlayItems.reduce((total, obj) => total + parseFloat(obj.price), 0);


  return (
    <AppContext.Provider
    value={{
      cart,
      setCart,
      overlayItems,
      setoverlayItems,
      isAdded,
      likedItems,
      isLiked,
      deleteLikedItem
    }}
    >
    <div>
      <Header/>
      <Routes>
      <Route
          path='/'
          element={
            <Home
            item ={cart}
            overlayItems={overlayItems}
            setoverlayItems={setoverlayItems}
            likedItems={likedItems}
            setLikedItems={setLikedItems}
            />
          }
        />
        <Route
          path='/cart'
          element={
            <CartItem 
            item ={cart}
            overlayItems={overlayItems}
            setoverlayItems={setoverlayItems}
            likedItems={likedItems}
            setLikedItems={setLikedItems}
            search={search}
            setSearch={setSearch}
            />
          }
        />
        <Route
          path='/overlay'
          element={
            <Overlay 
            overlayItems ={overlayItems}
            deleteItem = {deleteItem}
            total_price = {total_price}
            />
          }
        />
         <Route
          path='/liked'
          element={
            <Liked
            deleteItem = {deleteItem}
            overlayItems={overlayItems}
            setoverlayItems={setoverlayItems}
            likedItems ={likedItems}
            deleteLikedItem = {deleteLikedItem}
            />
          }
        />
        <Route
          path='/about'
          element={
            <About
            item ={cart}
            overlayItems={overlayItems}
            setoverlayItems={setoverlayItems}
            likedItems={likedItems}
            setLikedItems={setLikedItems}
            search={search}
            setSearch={setSearch}
            />
          }
        />
      </Routes>
      <Footer/>
    </div>
    </AppContext.Provider>
  );
}

export default App;

