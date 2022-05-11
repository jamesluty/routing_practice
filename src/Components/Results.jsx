import React from 'react'
import { useParams } from 'react-router-dom';

const HelloColored = () => {
    const {input, text, background} = useParams();

    if(!isNaN(input)){
        return (
            <div>
                <h1>The number is: {input}</h1>
            </div>
        )
    } else {
        return (
            <div style={{backgroundColor: background}}>
            <h1 style={{color: text}}>The word is: {input}</h1>
        </div>
    )
}
}

export default HelloColored