import './Message.styles.css';

export const Message = ({name}) => {
    return ( 
    <h3 className="message">
        I am message: {name}
    </h3>
    );
} 
    
// import React from 'react';
// export class Message extends React.Component {
//     render() {
//         return (
//             <h3 onClick={this.props.doSmth}>I am message {this.props.name}</h3>
//         )
//     }
// }