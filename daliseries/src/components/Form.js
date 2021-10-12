import React, {useState} from 'react';

const Form = (props) => {
    const [firstName,setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = (event) => {

        event.preventDefault();
        console.log(`First: ${firstName}, Last: ${lastName}`);
    }


    return (
        <div>
            <label>
                <form onSumbit={onSubmit}>
                    <input type="text" value={firstName} onChange= {(event) => {console.log(event); setFirstName(event.target.value);}} /> 
                    <input type="text" value={lastName} onChange= {(event) => {console.log(event); setLastName(event.target.value);}} /> 
                    <input type="submit" />
                </form>
            </label>
        </div>



    );


}

export default Form;