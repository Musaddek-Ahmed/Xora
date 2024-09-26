import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Feature from "./components/feature";
import Pricing from "./components/pricing";

export default function Home() {
  return (
<div>
<Header/>
<Hero/>
<Feature/>
<Pricing/>
</div>
  );
}
