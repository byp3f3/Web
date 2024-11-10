import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Item = (props) => {

  const context = React.useContext(AppContext);

  const onClickAdd=() =>{
    const {id, myid, name:name, description:description, price:price, image:image} = props;
    props.onPlus({id, myid, name, description, price, image})
  }

  const onClickAddLike=() =>{
    const {id, myid, name:name, description:description, price:price, image:image} = props;
    props.onLike({id, myid, name, description, price, image})
  }

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title><Nav.Link href="/about">{props.name}</Nav.Link></Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.price + "₽"}</Card.Text>
          <Button 
          onClick={onClickAdd}>
            {
              context.isAdded(props.myid) ? 'Добавлен':'Добавить в корзину'
            }
          </Button>
          <Button 
          onClick={onClickAddLike}>
            {
              context.isLiked(props.myid) ? '❤':'♡'
            }
          </Button>
        </Card.Body>
      </Card>
    )
}

export default Item