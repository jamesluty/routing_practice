import React from 'react'
import { useParams } from 'react-router-dom';

const HelloColored = () => {
    const {text, background} = useParams();

    return (
        <div style={{backgroundColor: background}}>
            <h1 style={{color: text}}>Hello</h1>
        </div>
    )
}

export default HelloColored