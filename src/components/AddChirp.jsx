import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddChirp extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateList(this.state.title);
        this.setState({ title: ' ' });
    }

    //Enter data into form
    onChange = (e) => this.setState({
        [e.target.name]:
            e.target.value
    });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '45', padding: '6px' }}
                    placeholder="Add Chirp"
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />

            </form>
        )
    }
}

// //Proptypes 
AddChirp.propTypes = {
    AddChirp: PropTypes.func
}

export default AddChirp
