import { createClient } from "@/utils/supabase/server";
import HeaderJS from "../../../header/HeaderJavaScript.jsx"
import TracingBeamBodyArticle from "../../../components/UI-Components/TracingBeamBodyArticle.jsx";
import '../globals.css'
export default async function Elements() {
  //console.log('DATAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  let news = [
    {
      title: '',
      body: '',
      badge:'',
      img_url:'',
      img_alt:'',
      keywords:'',
    }
  ];
  
  const supabase = createClient();

  try {
  
    const { data: news1 } = await supabase.from("articleJS_elementsHTML")
    .select()
  
    //console.log('DATA', news1);
    if (news1) {
      news = news1;
      //console.log(news);
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (
    <section>
             <HeaderJS/>
             <div style={{height:'4vh'}}></div>
             <div div className="view-sections">
              <TracingBeamBodyArticle news={news}/>
              </div>
          </section>
  );
}


