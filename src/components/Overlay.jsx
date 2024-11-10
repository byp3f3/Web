import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';

const Overlay = (props) => {


    return (
        <div>
        <div><h2 style={{ margin: '25px 70px'}}>Корзина</h2></div>    

        {props.overlayItems.length > 0 ?(
            <div className='cart'>
            {
                props.overlayItems.map((obj) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={obj.image} />
                        <Card.Body>
                        <Card.Title>{obj.name}</Card.Title>
                        <Card.Text>{obj.description}</Card.Text>
                        <Button 
                        onClick={() =>props.deleteItem(obj.id)}>
                            Удалить из корзины
                        </Button>
                        </Card.Body>
                    </Card> 
                ))
            }
            </div>
            ):(
                <h1 style={{ margin: '25px 70px'}}>В корзине ничего нет</h1>
            )
        } 
        <div>
            <h4 style={{ margin: '25px 70px'}}>Итог: </h4>
            <h4 style={{ margin: '25px 70px'}}>{props.total_price}</h4>
        </div>
        </div>
       
    )
} 

export default Overlay