import React from 'react';

module.exports = function(Component) {
    return class DecoratedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isOpen: false
            }
        }

        toggleOpen(event) {
            event.preventDefault();

            this.setState({
                isOpen: !this.state.isOpen
            });
        }


        render() {
            console.log('*', this.props);
            return <Component { ...this.props } isOpen = { this.state.isOpen } toggleOpen = { this.toggleOpen.bind(this) } />
        }
    }
};