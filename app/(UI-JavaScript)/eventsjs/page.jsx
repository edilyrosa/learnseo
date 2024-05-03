import { createClient } from "@/utils/supabase/server";
//import BodyPage from '../../components/viewPages/BodyPage.jsx'
import '../globals.css'
import Header from '../../header/Header.jsx'
import BodyPage from '../../components/viewPages/BodyPage.jsx'
import TracingBeamBodyArticle from "../../components/UI-Components/TracingBeamBodyArticle.jsx";

export default async function Events() {
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
    const { data: news1 } = await supabase.from("articleJS_events").select(); 
    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (
          <div>
             <Header/>
             <div style={{height:'4vh'}}></div>
             <div div className="view-sections">
              <TracingBeamBodyArticle news={news}/>
              </div>
          </div>
  );
}