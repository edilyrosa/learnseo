import { createClient } from "@/utils/supabase/server";
import HeaderJS from "../../../header/HeaderJavaScript.jsx"
import TracingBeamBodyArticle from "../../../components/UI-Components/TracingBeamBodyArticle.jsx";
import '../globals.css'
export default async function Elements() {
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
    const headers = {
      'Content-Type': 'application/json',
      // Add any other headers required by your Supabase setup
    };
    const { data: news1 } = await supabase.from("articleJS_elementsHTML")
    .select()
    .headers(headers);
    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (
    <div>
             <HeaderJS/>
             <div style={{height:'4vh'}}></div>
             <div div className="view-sections">
              <TracingBeamBodyArticle news={news}/>
              </div>
          </div>
  );
}


