import React from "react";
import Header from "./Header"
import Content from "./Content"

export default class Layout extends React.Component {
    constructor () {
        super(); 
        this.state = {siteName: "eCommerce-R-US"};
    }

    changeSiteName( name ){
        this.setState({siteName: name}); //Some comment
    }

    render () {
        return (
            <div>
                <Header siteName={this.state.siteName}/>
                <Content changeSiteName={this.changeSiteName.bind(this)} />
            </div>
        );
    }
}