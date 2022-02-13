import React from "react";
import { Form, Button } from "react-bootstrap";

function CityInputForm({ onFormSubmit }) {
    const [name, setName] = React.useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(name);    

    };
    return(
        <Form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <Button type="submit">Submit!</Button>
        </Form>
);
};

export default CityInputForm;