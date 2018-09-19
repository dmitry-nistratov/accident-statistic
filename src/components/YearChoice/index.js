import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAccidentInformation} from '../../AC/index';
import './style.css'


class YearChoice extends Component {
    state = {
        year: null
    };

    saveYear = (ev) => {
        this.setState({
            year: ev.target.value
        });
    };

    searchAccidentInformation = (year) => ev => {
        const {getAccidentInformation} = this.props;

        getAccidentInformation(year);
    };

    render(){
        return (
            <div className="head-input">
                <h1>Choose the year</h1>
                <input type="text" onBlur={this.saveYear}/>
                <button onClick={this.searchAccidentInformation(this.state.year)} className="search">SEARCH</button>
            </div>
        )
    }
}

export default connect(null, {getAccidentInformation})(YearChoice);

