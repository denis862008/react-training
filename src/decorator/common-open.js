import React from 'react';

module.exports = function(Component) {
    return class CommonOpen extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                openItemId: null
            };

            this.isItemOpen = this.isItemOpen.bind(this);
            this.openItem = this.openItem.bind(this);
            this.toggleOpenItem = this.toggleOpenItem.bind(this);
        }

        openItem(openItemId) {
            var self = this;

            return function(event) {
                if(event) event.preventDefault();

                self.setState({ openItemId });
            }
        }

        toggleOpenItem(id) {
            var self = this;

            return function(event) {
                if(event) event.preventDefault();

                self.setState({
                    openItemId: self.state.openItemId == id ? null : id
                });
            }
        }

        isItemOpen(id) {
            return this.state.openItemId == id;
        }

        render() {
            return (
                <Component { ...this.props } isItemOpen={ this.isItemOpen } openItem={ this.openItem } toggleOpenItem={ this.toggleOpenItem } />
            );
        }
    }
};