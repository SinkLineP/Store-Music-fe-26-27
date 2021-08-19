import React from 'react';


class Button extends React.Component {
    render() {
        const { onClick, children } = this.props;

        return (
            <div>
                <button onClick={onClick}>{children}</button>
            </div>
        )
    }
}

export default Button;