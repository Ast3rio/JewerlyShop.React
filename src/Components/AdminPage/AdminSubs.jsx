import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';
import {PropTypes} from 'prop-types';

const AdminSubs = () => {
    
    const subscribers = useSelector(state => state.admin.subscribers);
    
    return (
        <table className={style.subscribers}>
            <thead>
                <tr>
                    <th>Номер</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {subscribers.map(({id, email}) => <tr key={id}>
                    <th>{getIndex(subscribers, id)}</th>
                    <th> {email}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

AdminSubs.propTypes = {
    subscribers: PropTypes.array
}

AdminSubs.defaultProps = {
    subscribers: []
}

export default AdminSubs;