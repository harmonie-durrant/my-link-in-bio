import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const threeScript = document.createElement('script')
        threeScript.setAttribute('id', 'threeScript')
        threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js')
        document.getElementsByTagName("head")[0].appendChild(threeScript)
        return () => {
            if (threeScript) {
                threeScript.remove()
            }
        }
    }, [])
    return (
        <div>
            <Head>
                <title>Harmonie's Link In Bio</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}