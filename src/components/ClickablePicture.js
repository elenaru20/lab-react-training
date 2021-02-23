import React from 'react';

class ClickablePicture extends React.Component {

    state = {
        img:this.props.img,
        clicked: false
    }

    clickHandler = () => {
        console.log('click');
    const img = this.props.img
    const imgClicked = this.props.imgClicked
    
        if (!this.state.clicked) {
            this.setState((state, props) => ({
                img:imgClicked,
                clicked:true                
            }))
        } else {
            this.setState((state, props) => ({
                img:img,
                clicked:false               
            }))
        }

        
    }

    render() {
        return (
            <div>
                <img onClick={this.clickHandler} src={this.state.img} alt="Maxence"/>
            </div>
        );
    }
}

export default ClickablePicture;