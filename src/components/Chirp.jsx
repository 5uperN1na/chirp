import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Chirp extends Component {
    getStyle = () => {
        return {
            // ternary operator
            textDecoration: this.props.c.completed ?
                'line-through' : 'none',
            background: 'pink',
            color: 'green',
            padding: '50 px',
            borderBottom: '25px'
        }


    }

    render() {

        //destructuring
        let {id, title } = this.props.c;

        return (

            <div style={this.getStyle()}>
                <p><input type="checkbox" onChange={this.props.markRead.bind
                    (this, id)} /> {' '}
                    {title}</p>
            </div>
        )
    }
}

//Prop types
Chirp.propTypes = {
    c: PropTypes.object.isRequired
}



export default Chirp
