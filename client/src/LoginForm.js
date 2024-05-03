import React, { useState } from 'react'; // Import useState from react
import './LoginForm.css'; // Import CSS file
function LoginForm() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
// Here you can add your logic for handling login
console.log('Username:', username);
console.log('Password:', password);
};
return (
<div className="login-container">
<div className="login-form">
<h2>Login</h2>
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
<label>Password:</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
</div>
<button type="submit">Login</button>
</form>
<p>Don't have an account? <a href="/signup">Sign up</a></p>
</div>
</div>
);
}
export default LoginForm;