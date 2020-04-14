import React, { Component } from 'react';
import Chirp from './Chirp';
import PropTypes from 'prop-types';


//Purpose of the class base componenet is to display all the chirps on screen
class ChirpList extends Component {
   
    render() {
        // mapping through the array list from App.js class component
        return this.props.list.map((c) => (
            <Chirp key={c.id} c={c} markRead=
                {this.props.markRead} delChirp={this.props.delChirp}/>
        ));
    }

}


//Prop types
ChirpList.propTypes = {
    list: PropTypes.array.isRequired
}



export default ChirpList;
