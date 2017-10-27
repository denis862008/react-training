import React from 'react';

class Counter extends React.Component {
    handleIncrement(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <h3>{ this.props.count }</h3>
                <button onClick={ this.handleIncrement }>Click me</button>
            </div>
        );
    }
}

export default Counter;
