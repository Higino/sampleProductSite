import React from "react";


export default class Content extends React.Component {
    handleChange(event) {
        this.props.changeSiteName(event.target.value);
    }
    render () {
        return (
            <div>Please change the site Name <input onChange={this.handleChange.bind(this)}/></div>
        );
    }
}