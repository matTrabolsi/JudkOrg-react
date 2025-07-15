// src/components/AuthStatus/AuthStatus.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AuthStatus = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
            console.log('User signed out successfully!');
            navigate('/'); // Redirect to homepage after logout
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    };

    if (!user) {
        return null; // Don't show status if no user is logged in
    }

    return (
        <div
            style={{
                marginTop: '20px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
                textAlign: 'center',
                maxWidth: '400px',
                margin: '20px auto'
            }}
        >
            <p
                style={{
                    margin: '0 0 10px 0',
                    fontSize: '1.1em',
                    color: '#555'
                }}
            >
                Logged in as:{' '}
                <strong style={{ color: '#007bff' }}>{user.email}</strong>
            </p>
            <button
                onClick={handleLogOut}
                style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '16px'
                }}
            >
                Sign Out
            </button>
        </div>
    );
};

export default AuthStatus;