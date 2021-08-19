import React from 'react';
import "./Fragment.scss";

class Fragment extends React.Component {
    render() {
        const { container, children } = this.props;

        return (
            <div>
                {children}
            </div>
        )
    }
}

export default Fragment;