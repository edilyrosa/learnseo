import { createClient } from "../../../utils/supabase/server";
import TracingBeamDemo from './TracingBeamDemo.jsx'
import '../globals.css'
import HeaderJavaScript from '../../header/HeaderJavaScript'

export default async function JavaScriptHome() {
  let news = [
    {
      title: '',
      body: '',
      keywords:'',
    }
  ];

  const supabase = createClient();

  try {
    const { data: news1 } = await supabase.from("articleJS_ObjWindow").select();
    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (

            <div>
             <HeaderJavaScript/>
             <div style={{height:'12vh'}}></div>
              <TracingBeamDemo/>
            </div>
  );
}

