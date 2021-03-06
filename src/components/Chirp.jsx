import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Chirp extends Component {
    getStyle = () => {
        return {
            // ternary operator
            textDecoration: this.props.c.read ?
                'line-through' : 'none',
            background: '#FFDFD3',
            color: 'grey',
            padding: '5 px',
            borderBottom: '5px'
        }


    }

    render() {

        //destructuring
        let {id, title } = this.props.c;

        return (

            <div style={this.getStyle()}>
                <p><input type="checkbox" onChange={this.props.markRead.bind
                    (this, id)} /> {' '}
                    {title}
                    <button onClick = {this.props.delChirp.bind(this, id)} style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}

//Prop types
Chirp.propTypes = {
    c: PropTypes.object.isRequired
}

let btnStyle = {
    background: 'grey',
    color: 'white',
    border: 'none',
    padding: '5px, 9px',
    borderRadius: '75%',
    cursor: 'pointer',
    float: 'right'
}

//Prop types
Chirp.propTypes = {
    list: PropTypes.array.isRequired,
    markRead: PropTypes.func.isRequired,
    delChirp: PropTypes.func.isRequired,
}


export default Chirp
