import React from 'react';
import store from '../store/index';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import Counter from './counter';
import Articles from './articles';
import './styles.less';

class Root extends React.Component {
    static propTypes = {

    };

    render() {
        return(
            <Provider store={ store }>
                <div>
                    <Counter />
                    <Articles />
                </div>
            </Provider>
        );
    }
}

export default Root;