import React from 'react';



export const AppContext = React.createContext();
class AppContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth : true,
            responseData:''
        };
    }
    setToken = (data) => {
        this.setState({
            responseData: data
        })

    }

    toggleAuth = () => {
        this.setState({
            isAuth : !this.state.isAuth,
           
        })
    }
    render(){
        console.log(this.state.responseData);
        console.log(this.state.isAuth,"Auth");
        const { isAuth, responseData } = this.state;
        const { toggleAuth, setToken} = this;
        return (
            <AppContext.Provider value={{isAuth, toggleAuth,setToken,responseData}}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
export default AppContextProvider;