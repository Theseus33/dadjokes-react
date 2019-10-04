import React, { Component } from 'react';

class Joke extends Component {
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i className="fas fa-arrow up"></i>
                    <span>{this.props.votes}</span>
                    <i className="fas fa-arrow up"></i>
                </div>
                <div className="Joke-text">{this.props.text}</div>
            </div>
        )
    }
}

export default Joke;