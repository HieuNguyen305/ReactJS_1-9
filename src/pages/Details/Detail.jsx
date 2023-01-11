import React, { Component } from 'react'

export default class Detail extends Component {



    render() {
        // this.props.match.params.id 

        // console.log(window.location.pathname.split('/'));
        let arrURL = window.location.pathname.split('/');
        let paramId = arrURL[arrURL.length - 1];




        return (
            <div>
                Detail: {paramId}

            </div>
        )
    }
}
