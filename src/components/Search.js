import React, { Component } from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
import {Container} from 'flux/utils';

import '../Search.css';

class SearchBar extends Component {
    SearchRef = React.createRef();

    static getStores() {
        return [SearchStore];
    }

    static calculateState(prevState) {
        return SearchStore.getState();
    }

    handleChange = () => {
        const SearchObject = this.SearchRef.current;

        SearchActions.update(SearchObject.value);
    }

    handleKeyDown = (event) => {
        if(event.key === 'ArrowDown') {
            event.preventDefault();
            SearchActions.setActiveDown();
        }
        else if(event.key === 'ArrowUp') {
            event.preventDefault();
            SearchActions.setActiveUp();
        }
    }

    handleMouseOver = (index) => {
        SearchActions.setActive(index);
    }

    render() {
        return(
            <div>
                <input type='text' className='SearchBar' ref={this.SearchRef} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
                {this.state.data.map((result, index) => {
                    if(index === this.state.active) {
                        return <div className='active' key={index} onMouseOver={() => {this.handleMouseOver(index)}}>{result}</div>
                    }
                    return <div key={index} onMouseOver={() => {this.handleMouseOver(index)}}>{result}</div>
                })}
            </div>
        );
    }
}

export default Container.create(SearchBar);