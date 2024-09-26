import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Faq from "./components/faq";

export default function Home() {
  return (
<div>
<Header/>
<Hero/>
<Feature/>
<Pricing/>
<Faq/>
</div>
  );
}
