import React from 'react'
import "./style.scss"

const HomePage = () => {
    return (
        <div className='mainbg'>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    {/* <!-- Left side: Logo --> */}
                    <a class="navbar-brand" href="#">
                        <img src="logo.png" width="30" height="30" alt="Logo" />
                    </a>

                    {/* <!-- Center: Menu --> */}
                    <div class="navbar-nav mx-auto">
                        <a class="nav-link" href="#">Home</a>
                        <a class="nav-link" href="#">About</a>
                        <a class="nav-link" href="#">Services</a>
                        <a class="nav-link" href="#">Contact</a>
                    </div>

                    {/* <!-- Right side: Login button --> */}
                    <div class="navbar-nav">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default HomePage