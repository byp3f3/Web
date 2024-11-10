import React, { useEffect, useState} from 'react';
import Item from './Item';
import axios from 'axios';

const CartItem = (props) => {

    const onAddOverlay = (obj) => {
        try{
            if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/overlay/${obj.id}`);
                props.setoverlayItems((over)=> over.filter(item => Number(item.id) !== Number(obj.id)))
            }
            else{
                axios.post('http://localhost:3001/overlay', obj);
                props.setoverlayItems([...props.overlayItems, obj]);
            }
        }
        catch {
            alert('Error')
        }
    };

    const onAddLike = (obj) => {
        try{
            if(props.likedItems.find(item => Number(item.id) === Number(obj.id))){
                axios.delete(`http://localhost:3001/liked/${obj.id}`);
                props.setLikedItems((like)=> like.filter(item => Number(item.id) !== Number(obj.id)))
            }
            else{
                axios.post('http://localhost:3001/liked', obj);
                props.setLikedItems([...props.likedItems, obj]);
            }
        }
        catch {
            alert('Error')
        }
    }

    const onSearch = (inputValue) =>{
        props.setSearch(inputValue.target.value);
    }
    return (
        <div>
            <div style={{ margin: '25px 70px'}}>
                <input onChange={onSearch} placeholder='Поиск'></input>
            </div>
            <div className='cart'>
            {
                props.item
                
                .filter((item) =>
                item.name.toLowerCase().includes(props.search.toLowerCase())
                )
                .map(obj=>{
                    return (
                        <Item
                        key={obj.id}
                        id={obj.id}
                        myid={obj.myid}
                        name={obj.name}
                        description={obj.description}
                        price={obj.price}
                        image={obj.image}

                        onPlus={(cartObj) => onAddOverlay(cartObj)}
                        onLike={(cartObj) => onAddLike(cartObj)}
                        />
                    )
                })
            }</div>
        </div>
    );
}

export default CartItem;