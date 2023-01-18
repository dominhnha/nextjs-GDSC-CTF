import React, { Children, FC ,ReactNode } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
type Props = {
    children: React.ReactNode
 }
const Layout: FC<Props> = ({children}) => {
    return (
        <div>
            <Head>
                <title>GDSC - CTF</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}

Layout.propTypes = {}

export default Layout