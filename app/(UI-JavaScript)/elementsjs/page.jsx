import { createClient } from "@/utils/supabase/server";
import Header from "../../header/Header"
import BodyPage from '../../components/viewPages/BodyPage.jsx'
import '../globals.css'
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
    <div>
              <Header/>
              <div div className="view-sections">
              <BodyPage news={news}/>
              </div>
            </div>
  );
}