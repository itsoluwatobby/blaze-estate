// import { useAppContext } from "../hooks";
import { IoMdArrowUp } from "react-icons/io";
import {
  Hero,
  CallToAction,
  Rooms,
  Gallery,
  Slides,
  Footer,
} from "../components/landingPage";
import { Modal } from "../components/header/Modal";
import { useIntersectionObserver } from "../hooks";

export default function LandingPage() {
  const { intersecting, observerRef } = useIntersectionObserver(
    { screenPosition: '0px', threshold: 0.9 },
  );

  return (
    <div className='h-full w-full flex flex-col'>
      <Modal />

      <Hero observerRef={observerRef  as React.LegacyRef<HTMLDivElement>} />

      <CallToAction />
      <Rooms />
      <Gallery />
      <Slides />
      <Footer />

      <a href="#home"
        className={`${!intersecting.isIntersecting ? 'fixed' : 'hidden'} bottom-10 right-5 shadow-md border-gray-600 focus:outline-none border-2 animate-pulse rounded-full w-8 h-8 grid place-content-center hover:bg-black hover:text-white transition-colors`}>
        <IoMdArrowUp className='' />
      </a>

    </div>
  )
}