import '../App.css'

export default function Register() {
    return (
        <div id="registerContainer">
            <h1>Register</h1>
            <h1 class="error" id="register-error">error message here</h1>
            <div id="regFormContainer">
                <div>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label for="reg-email">Email</label>
                    <input type="email" id="reg-email" name="email" required />
                </div>
                <div>
                    <label for="reg-password">Password</label>
                    <input type="password" id="reg-password" name="password" required />
                </div>
            </div>
            <button type="submit" id="reg-submit">Register</button>
        </div>
    )
}