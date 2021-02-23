import React from 'react';

class Dice extends React.Component {

    state = {
        img:'/img/dice3.png'
    }

    clickHandler = () => {
        console.log('click');
    const imgClicked = '/img/dice-empty.png'
    const randomDice = `/img/dice${Math.floor(Math.random() * (7-1) + 1)}.png`
    
        
        this.setState((state, props) => ({
            img:imgClicked     
        }))
        setTimeout(()=> {
            this.setState((state, props) => ({
                img:randomDice              
            }))
        },1000)        
    }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src={this.state.img} alt="Dice"/>
            </div>
        );
    }
}

export default Dice;