import React from 'react'
import './seasonDisplay.css'

const SeasonDI={
    summer:{
        text:"lets hit the beach",
        iconName:'sun'
    },
    winter:{
        text:"it is cold",
        iconName:'snowflake'
    }
};



const Seasons=(lat,month)=>{
    if(month>2 && month <9){
        return lat>0? 'summer':'winter'
    }
    else{
        return lat>0? 'winter':'summer'
    }

};



const SeasonsDisplay=props=>{
    const ses=Seasons(props.lat,new Date().getMonth());
    const {text,iconName}=SeasonDI[ses];
    return (
        <div className={`season-display ${ses}` }>
            <i className={`top-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`bottom-right massive ${iconName} icon`} />
        </div>
    );
};



export default SeasonsDisplay;