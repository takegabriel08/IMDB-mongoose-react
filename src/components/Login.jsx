import '../App.css'

export default function Login() {
    return (
        <div id="loginContainer">
            <h1>Login</h1>
            <h1 class="error" id="error">error message here</h1>
            <div id="formContainer">
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
            </div>
            <button type="submit" id="log-submit">Login</button>
        </div>
    )
}