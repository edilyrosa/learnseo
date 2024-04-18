import { createClient } from "@/utils/supabase/server";
import BodyPage from '.././components/viewPages/BodyPage.jsx'

export default async function Index() {
  let news = [
    {
      title: '',
      body: '',
      keywords:'',
    }
  ];

  const supabase = createClient();

  try {
    const { data: news1 } = await supabase.from("articleJS").select();
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
        
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
            >
            Supabase
          </a>
        </p>
      </footer>
    </div>
    </>
  );
}