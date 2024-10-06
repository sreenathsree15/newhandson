// import React from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';

// const SignIn = () => {
//   const handleSignIn = () => {
//     alert('Logged in to your account successfully!');
//   };

//   return (
//     <div className="form-container">
//       <form>
//         <h2 style={{fontWeight:'bolder'}}>Login</h2>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="button" onClick={handleSignIn}>Login</button>
//       </form>
      
//       <div className="link-container">
//         <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here (for now just an alert)
    alert(`Logged in with email: ${email}`);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2 style={{ fontWeight: 'bolder' }}>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      
      <div className="link-container">
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
