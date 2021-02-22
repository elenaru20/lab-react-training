import React from 'react';

export default function BoxColor({r,g,b}) {
    
    let styling = {backgroundColor: `rgb(${r},${g},${b})`}

    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);

    if (red.length === 1) {
        red = "0" + red;
    }
        
    if (green.length === 1) {
        green = "0" + green;
    }
        
    if (blue.length === 1) {
        blue = "0" + blue;
    }
      
    let hex = '#'+red+green+blue;
        
    return (
        <div>
           <div style={styling}>{styling.backgroundColor} {hex}</div>
        </div>
    )
}