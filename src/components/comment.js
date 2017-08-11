import React from 'react';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user, text } = this.props.comment;

        return(
            <div>
                <p> { text } </p>
                <p> { user } </p>
            </div>
        );
    }
}