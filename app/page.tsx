import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";


import Image from 'next/image';
import BodyPage from './components/viewPages/BodyPage.jsx'


export default async function Index() {
  let news = [
    {
      title: '',
      body: '',
      img_url: '',
      img_alt: '',
      keywords:'',
    }
  ];

  const supabase = createClient();

  try {
    const { data: news1 } = await supabase.from("javascript").select();
    if (news1) {
      news = news1;
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

   
  return (

    <>
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
 
        <BodyPage news={news}/>

    </div>
    </>
  );
}
