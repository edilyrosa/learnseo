import { supabase } from "@/utils/supabase/client"; // Importa el cliente básico
import HeaderJS from "../../../header/HeaderJavaScript.jsx";
import TracingBeamBodyArticle from "../../../components/UI-Components/TracingBeamBodyArticle.jsx";
import "../globals.css";

export default async function Elements() {
  let news = [
    {
      title: "",
      body: "",
      badge: "",
      img_url: "",
      img_alt: "",
      keywords: "",
    },
  ];

  try {
    // Usa el cliente básico para hacer la consulta
    const { data: news1, error } = await supabase
      .from("articleJS_elementsHTML")
      .select();

    if (error) {
      console.error("Error fetching data from Supabase:", error);
    } else if (news1) {
      news = news1; // Actualiza las noticias con los datos obtenidos
    }
  } catch (error) {
    console.error("Error fetching data from Supabase:", error);
  }

  return (
    <section>
      <HeaderJS />
      <div style={{ height: "4vh" }}></div>
      <div className="view-sections">
        <TracingBeamBodyArticle news={news} />
      </div>
    </section>
  );
}
