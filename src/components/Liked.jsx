import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import '../App.css';

const Liked = (props) => {

    const context = React.useContext(AppContext);

    const onClickAdd=() =>{
      const {id, myid, name:name, description:description, price:price, image:image} = props;
      props.onPlus({id, myid, name, description, price, image})
    }
    return (
        <div>
        <div><h2 style={{ margin: '25px 70px'}}>Избранное</h2></div>    

        {props.likedItems.length > 0 ?(
            <div className='cart'>
            {
                props.likedItems.map((obj) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={obj.image} />
                        <Card.Body>
                        <Card.Title>{obj.name}</Card.Title>
                        <Card.Text>{obj.description}</Card.Text>
                        <Button
                        onClick={() =>props.deleteLikedItem(obj.id)}>❤
                        </Button>
                        </Card.Body>
                    </Card> 
                ))
            }
            </div>
            ):(
                <h1 style={{ margin: '25px 70px'}}>В избранном ничего нет</h1>
            )
        } 
        </div>
       
    )
} 

export default Liked