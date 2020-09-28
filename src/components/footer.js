import React from 'react';

export default function footer(){

    return(
        <footer>
            <p><a>Home</a> |<a>Terms and conditions</a> | <a>Privacy policy</a> | <a>Collection statement</a> | <a>Help</a>| <a>Manage Account</a></p>
            <p>Copyright &copy; 2020 DEMO Streaming all rights reserved</p>
            <div className='flex'>
                <div>
                    <img src="img/facebook-white.svg" height="25" width="25" alt="logo-facebook"></img>
                    <img src="img/twitter-white.svg" height="25" width="25" alt="logo-twitter"></img>
                    <img src="img/instagram-white.svg" height="25" width="25" alt="logo-instagram"></img>
                </div>
                <div>
                    <img src='img/app-store.svg' height="25" width="70" alt="app-store"></img>
                    <img src='img/play-store.svg' height="25" width="70" alt="play-store"></img>
                    <img src='img/windows-store.svg' height="25" width="70" alt="windows-store"></img>
                </div>
            </div>
        </footer>
    )
}