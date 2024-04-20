import { createClient } from "@/utils/supabase/server";
import BodyPage from '../components/viewPages/BodyPage.jsx'
import './globals.css'
export default async function Elements() {
  let news = [
    {
      title: '',
      body: '',
      keywords:'',
    }
  ];

  const supabase = createClient();

  try {
    const { data: news1 } = await supabase.from("articleJS_elementsHTML").select();
    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (
    <>
        <head>
        {/* Google Analitics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', "${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}");
            `,
          }}></script>

          {/* Google Tag Manager */}
        <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer',"${process.env.NEXT_PUBLIC_GOOGLE_TAGS}");`,
              }}
            />
      
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6290480789994335"
          crossorigin="anonymous"></script>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6290480789994335"
      crossorigin="anonymous"></script>

      <title>Interactively Manipulating HTML Elements with JavaScript: Get, Create, Update, Show, Hide, and Remove.</title>
      <meta property="og:title" content="Learn JavaScript Interactively: Get, Create, Update, Show, Hide, and Remove HTML Elements" />
      <meta property="og:description" content="Master the art of manipulating HTML elements dynamically with JavaScript. Learn how to get, create, update, show, hide, and remove elements from the DOM." />
      <meta name="keywords" content='avaScript, HTML, DOM, get element, create element, update element, show element, hide element, remove element, interactively, manipulate HTML element, dynamic, HTML element, web development'/>
   </head>

        <BodyPage news={news}/>
    </>
  );
}