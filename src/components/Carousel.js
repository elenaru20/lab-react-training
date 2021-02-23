import React from 'react';

class Carousel extends React.Component {

    state = {
        index: 0,
        img: this.props.imgs[0]
    }

    leftClickHandler = () => {
        console.log('click');
        let newIndex = 0;
        if (this.state.index > 0) {
            newIndex = ((this.state.index - 1) % (this.props.imgs.length));    
        } else {
            newIndex = this.props.imgs.length-1;    
        }
        
        console.log(newIndex)
        this.setState((state, props) => ({
            index: newIndex,
            img:this.props.imgs[newIndex]
        }))       
    }

    rightClickHandler = () => {
        console.log('click');
        
        let newIndex = ((this.state.index + 1) % (this.props.imgs.length));    
 
        
        console.log(newIndex)
        this.setState((state, props) => ({
            index: newIndex,
            img:this.props.imgs[newIndex]
        }))       
    }

    render() {
        return (
            <div>
                <button onClick={this.leftClickHandler}>Left</button>
                <img src={this.state.img} alt="CarouselPic"/>
                <button onClick={this.rightClickHandler}>Right</button>
            </div>
        );
    }
}

export default Carousel;