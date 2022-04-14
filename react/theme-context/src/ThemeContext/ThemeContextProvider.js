import React from 'react';

export const ThemeContext = React.createContext();
class ThemeContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           isTheme: false,
           button:true
           
        }
    }
    changeColor = () =>{
        this.setState({
            isTheme : !this.state.isTheme,
            button:!this.state.button
        })
    }
   
    render (){
        const { isTheme,button,} = this.state;
        const { changeColor } = this;
        return(
            <ThemeContext.Provider value={{changeColor,isTheme,button}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContextProvider;