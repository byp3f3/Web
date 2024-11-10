import React, { useEffect, useState} from 'react';
import Item from './Item';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import '../App.css';

const About = (props) => {

    // const onAddOverlay = (obj) => {
    //     try{
    //         if(props.overlayItems.find(item => Number(item.id) === Number(obj.id))){
    //             axios.delete(`http://localhost:3001/overlay/${obj.id}`);
    //             props.setoverlayItems((over)=> over.filter(item => Number(item.id) !== Number(obj.id)))
    //         }
    //         else{
    //             axios.post('http://localhost:3001/overlay', obj);
    //             props.setoverlayItems([...props.overlayItems, obj]);
    //         }
    //     }
    //     catch {
    //         alert('Error')
    //     }
    // };

    // const onAddLike = (obj) => {
    //     try{
    //         if(props.likedItems.find(item => Number(item.id) === Number(obj.id))){
    //             axios.delete(`http://localhost:3001/liked/${obj.id}`);
    //             props.setLikedItems((like)=> like.filter(item => Number(item.id) !== Number(obj.id)))
    //         }
    //         else{
    //             axios.post('http://localhost:3001/liked', obj);
    //             props.setLikedItems([...props.likedItems, obj]);
    //         }
    //     }
    //     catch {
    //         alert('Error')
    //     }
    // }
    
    // return (
    //     props.item
    //     .map((obj) =>
    //         <div className='product'>
    //         <div>
    //         <Card style={{ width: '18rem' }}>
    //                     <Card.Img variant="top" src={obj.image} />
    //                     <Card.Body>
    //                     <Card.Title>{obj.name}</Card.Title>
    //                     <Card.Text>{obj.description}</Card.Text>
                        
    //                     </Card.Body>
    //                 </Card> 
    //         </div>
    //         </div>
    //     )
    // );
}

export default About;