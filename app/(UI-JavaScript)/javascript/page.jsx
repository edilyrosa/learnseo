import { createClient } from "@/utils/supabase/server";
import TracingBeamDemo from './TracingBeamDemo.jsx'
//import '../globals.css'
import HeaderJavaScript from '../../header/HeaderJavaScript.jsx'

export default async function JavaScriptHome() {

  const supabase = createClient();

  return (

            <div>
             <HeaderJavaScript/>
             <div style={{height:'12vh'}}></div>
              <TracingBeamDemo/>
            </div>
  );
}

