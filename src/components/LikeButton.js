import React from 'react';

const inititalState = {
    counter:0,
    backgroundColor: 'purple'
}

class LikeButton extends React.Component {

    state = {
        counter:0,
        liked: false,
        backgroundColor: 'purple'
    }

    clickHandler = () => {
        console.log('click');
    const colors = ['purple','blue','green','yellow','orange','red']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
        // update the state of counter
        // 🚨 should not be done
        // this.state.counter = 5
        // this.setState({
        //   counter: this.state.counter + 1
        // })
        if (this.state.counter < 11) {
            this.setState((state, props) => ({
           
                counter: state.counter + 1,
                backgroundColor: randomColor
                
            }))
        } else {
            this.setState(inititalState)
        }

        
    }

    render() {
        return (
            <div>
                <button style={{
                    backgroundColor: this.state.backgroundColor,
                    color: "white",
                    height: "50px",
                    width: "200px"
                }} 
                onClick={this.clickHandler}>{this.state.counter} Likes</button>
            </div>
        );
    }
}

export default LikeButton;