import React from "react";
import Header from "./Header";
import InputCity from "./InputCity";
import 'bootstrap/dist/css/bootstrap.min.css';



class Main extends React.Component {
    render() {
        return (<>

            <Header />
            
            <InputCity />
            </>
        );
    }
};

export default Main;