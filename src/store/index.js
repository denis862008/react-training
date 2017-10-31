import { createStore } from 'redux';
import reducer from '../reducer/index';

let store = createStore(reducer, {});
window.store = store;

export default store;