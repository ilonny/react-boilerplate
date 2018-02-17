import React, { Component } from 'react'
export default class IndexComponent extends Component {
    render() {
        let comp = (
            <div>
                test component !
            </div>
        )
        return (
            <div>
                {comp}
            </div>
        )
    }
}