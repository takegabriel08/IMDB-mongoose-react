import '../App.css'

export default function Header(props) {

    return (
        <header className='Header'>
            <div className="header-btns">
                <div className="btn login">Login</div>
                <div className="btn register">Register</div>
                <div className="btn logout">Logout</div>
            </div >
            <div id="header">
                <h1>{props.movieNo} Movies about to be released!</h1>
                <h3 id="movieNo"></h3>
            </div>
        </header >
    )
}