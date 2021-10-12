import React, {useState} from 'react';


function ButtonExample() {

    const [count, setCount] = useState(0);

    const onButtonClick = () => {
        setCount(count+1);
    };

    return (
        <div>
            
            <button className="coolButton" onClick={onButtonClick}>This button has been clicked {count} times!</button>
        </div>


    );
}

export const test = "2rfds";


export default ButtonExample;