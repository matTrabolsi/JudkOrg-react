import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const AuthForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signUp, signIn } = useAuth();
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await signUp(email, password);
            console.log('User signed up successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error signing up: ', error.message);
            // Implement user-friendly error display here
        }
    };

    const handleSignIn = async () => {
        try {
            await signIn(email, password);
            console.log('User signed in successfully!');
            navigate('/');
        } catch (error) {
            console.error('Error signing in: ', error.message);
            // Implement user-friendly error display here
        }
    };

    return (
        <div
            style={{
                marginBottom: '20px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                maxWidth: '400px',
                margin: '20px auto',
                backgroundColor: '#fff',
            }}
        >
            <h3 style={{ marginTop: '0', color: '#333' }}>Login / Register</h3>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                    width: 'calc(100% - 20px)',
                    padding: '10px',
                    marginBottom: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                    width: 'calc(100% - 20px)',
                    padding: '10px',
                    marginBottom: '15px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                }}
            />
            <button
                onClick={handleSignIn}
                style={{
                    width: '48%',
                    padding: '10px 15px',
                    marginRight: '4%',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Sign In
            </button>
            <button
                onClick={handleSignUp}
                style={{
                    width: '48%',
                    padding: '10px 15px',
                    backgroundColor: '#3b28a7ff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}
            >
                Sign Up
            </button>
        </div>
    );
};

export default AuthForm;