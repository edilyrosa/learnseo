import { createClient } from "@/utils/supabase/server";
import BodyPage from '../components/viewPages/BodyPage.jsx'

export default async function Window() {
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

    <>
        <BodyPage news={news}/>
    </>
  );
}