import React, { useState } from 'react';
import './SignUpForm.css'; // Import CSS file

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
e.preventDefault();
// Here you can add your logic for handling sign up
console.log('Username:', username);
console.log('Email:', email);
console.log('Password:', password);
};
return (
<div className="signup-container">
<div className="signup-form">
<h2>Sign Up</h2>
<form onSubmit={handleSubmit}>
<div>
<label>Username:</label>
<input
type="text"
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>
</div>
<div>
<label>Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<div>
<label>Password:</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</div>
<button type="submit">Sign Up</button>
</form>
<p>Already have an account? <a href="/login">Login</a></p>
</div>
</div>
);
}
export default SignUpForm;