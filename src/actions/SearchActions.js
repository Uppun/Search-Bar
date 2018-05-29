import SearchActionTypes from './SearchActionTypes';
import Dispatcher from '../Dispatcher';

export default {
    update(data) {
        Dispatcher.dispatch({
            type: SearchActionTypes.UPDATE,
            data,
        });
    },

    setActiveDown() {
        Dispatcher.dispatch({
            type: SearchActionTypes.ARROWDOWN,
        });
    },

    setActiveUp() {
        Dispatcher.dispatch({
            type: SearchActionTypes.ARROWUP,
        });
    },

    setActive(index) {
        Dispatcher.dispatch({
            type: SearchActionTypes.ACTIVE,
            index,
        });
    }
}