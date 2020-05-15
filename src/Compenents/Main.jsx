import React, {useState} from 'react';

const Main = () => {
    const [buttonValue, setButtonValue] = useState(1);
    return <input type="button" value={buttonValue} onClick={() => setButtonValue(buttonValue+1)}/>
}


export default Main