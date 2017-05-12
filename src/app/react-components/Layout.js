import React from "react";
import Header from "./Header"
import Content from "./Content"

export default class Layout extends React.Component {
    constructor () {
        super(); 
        this.state = {siteName: "eCommerce-R-US"};
    }

    render () {
        // Change site name from now and then
        setTimeout(() => {
            if( this.state.siteName === "eCommerce-R-US"){
                setTimeout(()=> {this.setState({siteName: "Commerce-4-YOU"})}, 3000);
            }
            else {
                setTimeout(()=> {this.setState({siteName: "eCommerce-R-US"})}, 3000);
            }
        }, 3000);
        return (
            <div>
                <Header siteName={this.state.siteName}/>
                <Content />
            </div>
        );
    }
}