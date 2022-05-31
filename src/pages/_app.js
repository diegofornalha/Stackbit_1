import '../components/register-components';
import '../css/main.css';
import Head from 'next/head';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
                <Script>
                    function resizeIframe (Object) {
                        Object.style.height = Object.contentWindow.document.documentElement.scrollHeight + 'px';
                    }
                </Script>
                <Script id="gtm-script" strategy="lazyOnload">
                    {`(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5SMVSWG');`}
                </Script>
            <Component {...pageProps} />
        </>
    );
}
