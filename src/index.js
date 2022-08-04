import React from 'react'
import  ReactDOM from 'react-dom'
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './spinner';







class App extends React.Component{
    constructor(props){
        super(props);
        this.state={lat:null, message:''};
        



    };
    componentDidMount(){
        console.log('rendered for first time');
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                this.setState({lat:position.coords.latitude})
            },
            err=>{
                this.setState({message:err.message})
            }
        );
    };
    componentDidUpdate(){
        console.log('rendered for second time');
    };
    render(){
        
        if(this.state.lat && !this.state.message){
            return(
                <div><SeasonsDisplay lat= {this.state.lat} /></div>
            )
        }
        if(!this.state.lat && this.state.message){
            return(
                <div>error:{this.state.message}</div>
            )
        }
        return(
            <Spinner message='allow to use your location'/>
        )
    }
}


ReactDOM.render(<App/>,document.querySelector('#root'))