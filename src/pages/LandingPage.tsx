// import { useAppContext } from "../hooks";
import {
  Header,
  Hero,
  CallToAction,
  Rooms,
  Gallery,
  Slides,
  Footer,
} from "../components/landingPage";

export default function LandingPage() {
  // const { tabName } = useAppContext();

  return (
    <div className='hideBars overflow-y-scroll h-full w-full flex flex-col'>
      <Header />
      <Hero />
      <CallToAction />
      <Rooms />
      <Gallery />
      <Slides />
      <Footer />
    </div>
  )
}