import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
<div>
<Header/>
<Hero/>
<Feature/>
<Pricing/>
<Faq/>
<Testimonials/>
</div>
  );
}
