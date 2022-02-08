import { NextRequest, NextResponse } from 'next/server'

const isProduction = process.env.NODE_ENV === "production";


export const middleware = (req) => {
    if (isProduction) NextResponse.next();
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
        const auth = basicAuth.split(' ')[1]
        const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

        if (user === '4dmin' && pwd === 'testpwd123') {
            return NextResponse.next()
        }
    }

    return new Response('Auth required', {
        status: 401,
        headers: {
            'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
    })
}