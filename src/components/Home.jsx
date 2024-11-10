import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext } from '../App';
import Item from './Item';
import axios from 'axios';
import '../App.css';

const Home = (props) => {


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

    return (
        <head><meta name="google-site-verification" content="0bZNBy4qBYsfTfffGLT6ZPzjP38uYppkZyk_DX5N73E" /></head>
        <div>
        <div className='cont main'>
            <div className='about'>
                <img className='about-photo' src='../images/cafe.jpeg'/>
                <div className='about-text'>
                    <p style={{fontSize: '18px'}}>Приветствуем вас в мире свежести и ароматов. Наша пекарня предлагает вам возможность 
                        насладиться вкусом настоящих домашних хлебов, выпечки и кондитерских изделий. 
                        Мы используем только самые свежие ингредиенты и традиционные рецептуры, чтобы создать уникальные блюда, 
                        которые будут радовать ваши вкусовые рецепторы с первого укуса.
                    </p>
                    <p style={{fontSize: '20px'}}>Часы работы: С 8:00 до 20:00 каждый день без выходных.</p>
                    <p style={{fontSize: '20px'}}>ул. Куусинена, 11, корп. 2, Москва </p>
                    {/* метро: Полежаевская, Хорошёвская, Хорошёво */}
                    <div className='met'>
                        <img className='metro' src='../images/7.png'/>
                        <p style={{fontSize: '20px'}}>Полежаевская</p>
                    </div>
                    <div className='met'>
                        <img className='metro' src='../images/11.png'/>
                        <p style={{fontSize: '20px'}}>Хорошёвская</p>
                    </div>
                    <div className='met'>
                        <img className='metro' src='../images/14.png'/>
                        <p style={{fontSize: '20px'}}>Хорошёво</p>
                    </div>
                    
                </div>
            </div>
            <div className='email'>
                <form>
                <label >
                    <p >Имя:</p>
                    <input type="text" style={{width: '275px'}}/>
                </label>
                <label>
                    <p>Email:</p>
                    <input type='email' style={{width: '275px'}}/>
                </label>
                <label>
                    <p>Сообщение:</p>
                    <textarea style={{width: '275px', height: '140px', resize: 'none'}}></textarea>
                </label>
                <br/>
                <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
        <div className='cart'>
            {
                props.item.slice(0, 8).map(obj=>{
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
    )
} 

export default Home;
