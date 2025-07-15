// src/pages/LoginPage/LoginPage.js
import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import AuthStatus from '../../components/AuthStatus/AuthStatus';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
    const { user } = useAuth();

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
            }}
        >
            {user ? (
                <>
                    <h2 style={{minHeight:'100hv' , color: '#333' }}>You're already logged in!</h2>
                    <AuthStatus />
                </>
            ) : (
                <>
                    <h2 style={{ color: '#333' }}>Login or Create Account</h2>
                    <AuthForm />
                    <p style={{ color: '#666', fontSize: '0.9em' }}>
                        Please use the form above to sign in or create a new account.
                    </p>
                </>
            )}
        </div>
    );
};

export default LoginPage;