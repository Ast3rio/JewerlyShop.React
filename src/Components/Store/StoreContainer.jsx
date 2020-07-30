import React from 'react';
import { connect } from 'react-redux';
import Store from './Store';

class StoreContainer extends React.Component {
    render() {
        return (
            <Store />
        )
    }
}


export default connect()(StoreContainer)