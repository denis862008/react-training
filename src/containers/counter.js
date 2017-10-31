import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counterIncrement } from '../action-creators/counter'

class Counter extends React.Component {
    static propTypes = {
        count: PropTypes.number,
        counterIncrement: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.handleIncrement = this.handleIncrement.bind(this);
    }
    handleIncrement(e) {
        e.preventDefault();
        this.props.counterIncrement();
    }

    render() {
        return(
            <div className='counter-container'>
                <h3>{ this.props.count }</h3>
                <button onClick={ this.handleIncrement }>Click me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // const { count } = state;

    return {
        count: state.count
    }
}

export default connect(
    mapStateToProps,
    { counterIncrement }
)(Counter);
