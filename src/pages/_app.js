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
                {/* // Selecting the iframe element */}
                var frame = document.getElementById("Iframe");
                
                {/* // Adjusting the iframe height onload event */}
                frame.onload = function()
                // function execute while load the iframe
                {
                // set the height of the iframe as 
                // the height of the iframe content
                frame.style.height = frame.contentWindow.document.body.scrollHeight + '1px';
                
        
                // set the width of the iframe as the 
                // width of the iframe content
                frame.style.width = frame.contentWindow.document.body.scrollWidth+'1px';
                    
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
