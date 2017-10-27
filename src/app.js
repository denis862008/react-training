import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter';
import store from './store/index';
//import ArticleList from './components/articleList';

//<ArticleList />

ReactDOM.render(
    <Counter count={store.getState()} />,
    document.getElementById('app')
);

store.subscribe(function() {
    ReactDOM.render(
        <Counter count={store.getState()} />,
        document.getElementById('app')
    );
});