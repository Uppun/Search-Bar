import {ReduceStore} from 'flux/utils';
import Dispatcher from '../Dispatcher';
import SearchActionTypes from '../actions/SearchActionTypes';

class SearchStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return {results: ['tomato', 'tomato paste', 'garlic', 'garfield', 'small rabbit', 'big rabbit'], data: [], active: -1};
    }

    reduce(state, action) {
        switch(action.type) {
            case SearchActionTypes.UPDATE: {
                const matchArray = [];

                if(action.data !== '') {
                    for(let i = 0; i < state.results.length; i++) {
                        if(state.results[i].includes(action.data)) {
                            matchArray.push(state.results[i]);
                        }
                    }
                }

                return {...state, data: matchArray, active: -1};
            }

            case SearchActionTypes.ARROWDOWN: {
                let active = state.active + 1;

                if(active >= state.data.length) {
                    active = 0;
                }

                return {...state, active};
            }

            case SearchActionTypes.ARROWUP: {
                let active = state.active - 1;

                if(active < 0) {
                    active = state.data.length - 1;
                }

                return {...state, active};
            }

            case SearchActionTypes.ACTIVE: {
                return {...state, active: action.index};
            }

            default: {
                return state;
            }
        }
    }
}

export default new SearchStore();