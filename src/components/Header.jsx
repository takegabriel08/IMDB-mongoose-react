import '../App.css'

export default function Header() {
    return (
        <header className='Header'>
            <div id="headerBtns">
                <button id="login">Login</button>
                <button id="register">Register</button>
                <button id="logout">Logout</button>
            </div>
            <div id="header">
                <h1>Movies about to be released!</h1>
                <h3 id="movieNo"></h3>
            </div>
        </header>
    )
}