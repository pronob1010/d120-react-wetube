import React from 'react';
import Video from './video';
import Time from './time';
import Channel from './channel';

function Mainapp(props){
    return(
        <div>
            <Video title = {props.title}/>
            <Time time ={props.dateAdded}/>
            <Channel channel = {props.channel}/>
            <hr></hr>
        </div>
    )
}

export default Mainapp;
