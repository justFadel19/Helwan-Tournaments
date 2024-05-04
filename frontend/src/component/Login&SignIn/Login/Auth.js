import { Link } from "react-router-dom";

const adminUsername = 'admin';
const adminPassword = '123';
const userUsername = 'user';
const userPassword = '321';

function valid() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === adminUsername && passwordInput === adminPassword) {
        // Show admin panel
        window.location.href = <Link to={"/UserHome"}></Link>
    } else if (usernameInput === userUsername && passwordInput === userPassword) {
        // Show user panel
        window.location.href =  <Link to={"/UserHome"}></Link>
    } else {
        alert('Invalid username or password');
    }
}
