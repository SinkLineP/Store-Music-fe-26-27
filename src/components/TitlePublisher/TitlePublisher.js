import React, { Component } from 'react';
import "./styles/title-publishers.scss"

export default class TitlePublisher extends Component {
    render() {
        const { titlePublisher } = this.props;

        return (
            <div className="title-publisher">
                <h2>{titlePublisher}</h2>
            </div>
        )
    }
}
