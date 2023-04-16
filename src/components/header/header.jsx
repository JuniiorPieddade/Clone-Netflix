import './header.css'


function Header({black}){
    return(
        <header className={black ? 'header' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix' />
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' />
                </a>
            </div>
        </header>
    )
}

export default Header