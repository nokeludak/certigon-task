import React from 'react'
import "./Header.css"

function Header({ setIsAdding }) {
    return (
        <header>
            <h1 className="header">Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button className="btn" onClick={() => setIsAdding(true)} >Add employee</button>
            </div>
        </header>
    )
}

export default Header