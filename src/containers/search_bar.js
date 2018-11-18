import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input type="text" placeholder="look up your favorite city" className="form-control" value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-button">
                    <input type="submit" className="btn btn-primary" />
                </span>
            </form>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' })
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)

}

export default connect(null, mapDispatchToProps)(SearchBar);