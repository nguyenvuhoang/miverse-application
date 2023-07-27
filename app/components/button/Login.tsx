import Link from 'next/link'
import React from 'react'

type Props = {}

const LoginButton = (props: Props) => {
    return (
        <div className="sc-btn-top mg-l-8" id="site-header">
            <Link href="/login" className="sc-button header-slider style style-1 profile fl-button pri-1">
                <span>Login</span>
            </Link>
        </div>
    )
}

export default LoginButton