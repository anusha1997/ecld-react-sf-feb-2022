import React from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContextProvider';
import Theme from './theme';

export default class container extends React.Component {
    render(){
        const { isTheme,changeColor} = this.context;
        
        return (
            <div>
            <div className='auth'>
            <button className='toggle' onClick={changeColor}>{isTheme ? "Dark" : "Light"}</button> 
             </div>
      
            <div>
                <Theme/>
                </div>
                </div>
        
        )
    }
}
container.contextType = ThemeContext;