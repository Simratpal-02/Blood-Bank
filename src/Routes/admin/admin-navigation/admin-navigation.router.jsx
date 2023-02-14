import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './admin-router.css'

const AdminNavigation = ()=>{
    return (
        <Fragment>
            <div className='admin-navigation'>
                <h1>Admin Panel</h1>
                <Link to={'/'}>Go To HomePage!</Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default AdminNavigation;