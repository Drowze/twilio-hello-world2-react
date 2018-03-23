import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/UserList';

export const API_URL = 'http://localhost:3006'

ReactDOM.render(<UserList />, document.getElementById('root'));
