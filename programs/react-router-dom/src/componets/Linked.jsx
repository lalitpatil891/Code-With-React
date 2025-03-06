import React from 'react'
import { Link } from 'react-router-dom'


function Linked() {
    return (
        <>
            <div className='navbar'>

                <h2>React-router-dom Demo</h2>
                <div className="pageLink">
                    <Link to="/Page1"><h4>Page1</h4></Link>
                    <Link to="/Page2"><h4>Page2</h4></Link>
                    <Link to="/Page3"><h4>Page3</h4></Link>
                </div>
            </div>

        </>
    )
}

export default Linked
