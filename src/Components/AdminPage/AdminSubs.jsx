import React from 'react';
import style from './AdminPage.module.scss';
import { useSelector } from 'react-redux';

const AdminSubs = () => {
    
    const subscribers = useSelector(state => state.admin.subscribers);

    const getIndex = (getId) => { return subscribers.findIndex(({ id }) => id == getId) + 1; } ;
    
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
                    <th>{getIndex(sub.id)}</th>
                    <th> {sub.email}</th>
                </tr>)}
            </tbody>
        </table>
    )
}

export default AdminSubs;