import React, { FC } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const Header: FC = props => {
    return (
        <div className='Header w-full flex flex-row  items-center justify-between'>
            {/* <div className="">
                <Link href={"/"} className="Header__logo">
                    GDSC
                </Link>
            </div>

            <div className="Header__navication">
                <Link href="/about" className="Header__nav">
                    About
                </Link>
                <Link href="/blog" className="Header__nav">
                    Blog
                </Link>
            </div> */}
            <button className=''>
                Header
            </button>
        </div>
    )
}

Header.propTypes = {}

export default Header