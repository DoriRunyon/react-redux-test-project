import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from '../actions/index';


class PokemonSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value }); 
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchPokemon(this.state.term);
        this.setState({ term: '' });
    }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                 placeholder="Search for Pokemon."
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPokemon }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokemonSearch);