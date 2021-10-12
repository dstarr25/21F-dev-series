import React, {useState,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemoJson} from '../../store/actions/demoJsonActionCreators';
import axios from 'axios';

const ReduxComponent = () => {
    const dispatch = useDispatch();


    const demoJson = useSelector((store) => store.demoJson.data);
    const [value, setValue] = useState(1);

    useEffect(() => {
        const action = fetchDemoJson({title: "Redux/Axios demonstration:", body: "click button above to fetch data from jsonplaceholder!"});
        dispatch(action);
    // eslint-disable-next-line
    },[]);


    const handleButtonClick = async () => {
        const result = await axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${value}` //https://reqres.in/api/products/
        },[]);
        
        //dispatch(fetchDemoJson(value));
        setValue(value+1);
        dispatch(fetchDemoJson(result.data));
        console.log(result.data);
    }

    return (

        <div>
            <button type="button" className="coolButton" onClick={handleButtonClick}>
                Fetch data from id {value}
            </button>
            {/* <div>{JSON.stringify(demoJson)}</div> */}
            <h1 className="ListHeader">{demoJson?.title}</h1>
            <div className="flavor">{demoJson?.body}</div> 


        </div>

    );
}

export default ReduxComponent;