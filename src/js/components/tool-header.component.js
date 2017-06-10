import * as React from 'react';

import { PropTypes } from 'prop-types';

export class ToolHeader extends React.Component {

    static propTypes = {
        headerText: PropTypes.string.isRequired,
    };

    static defaultProps = {
        headerText: 'Please specify a header',
    }; 

    render() {
        return <header>
            <h1>{this.props.headerText}</h1>
        </header>;

    }

}
