import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';
import { getIndex } from '../../Utils/getIndex';

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
                {subscribers.map(sub => <tr key={sub.id}>
                    <th>{getIndex(subscribers, sub.id)}</th>
                    <th> {sub.email}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

export default AdminSubs;