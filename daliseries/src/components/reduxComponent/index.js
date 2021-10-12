import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDemoJson} from '../../store/actions/demoJsonActionCreators';
import axios from 'axios';

const ReduxComponent = () => {
    const dispatch = useDispatch();


    const demoJson = useSelector((store) => store.demoJson.data);
    const [value, setValue] = useState(1);

    // useEffect(() => {
    //     const action = fetchDemoJson("test");
    //     dispatch(action);
    // }, []);


    const handleButtonClick = async () => {
        const result = await axios({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${value}` //https://reqres.in/api/products/
        });
        
        //dispatch(fetchDemoJson(value));
        setValue(value+1);
        dispatch(fetchDemoJson(result.data));
        console.log(result.data);
    }

    return (

        <div>

            {/* <div>{JSON.stringify(demoJson)}</div> */}
            <h1>{demoJson?.title}</h1>
            <div>{demoJson?.body}</div>
            <button type="button"  onClick={handleButtonClick}>
                Fetch data from id {value}
            </button>


        </div>

    );
}

export default ReduxComponent;