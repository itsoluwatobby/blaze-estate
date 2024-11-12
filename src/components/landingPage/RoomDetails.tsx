import { MdKeyboardArrowRight } from "react-icons/md";
import { CURRENCY } from "../../utils";
import ImageContainer from "../ImageContainer"

type RoomDetailsProps = {
  imageSource: string;
  imageName: string;
  roomName: string;
  description: string;
  price: string;
  classNames?: string;
  imageClassNames?: string;
  containerClass?: {
    text?: string,
    title?: string,
    gap?: string,
    buttonClass?: string,
    container?: string,
    lowerContainer?: string,
  }
}

export default function RoomDetails(
  {
    imageSource, imageName,
    roomName, description, price,
    classNames, imageClassNames,
    containerClass,
  }: RoomDetailsProps) {

  return (
    <article className={`border shadow rounded flex flex-col gap-y-4 ${containerClass?.container}`}>
      <ImageContainer source={imageSource} name={imageName} 
      classNames={classNames} imageClassNames={imageClassNames}
      />

      <div className={`p-4 flex flex-col gap-y-4 ${containerClass?.lowerContainer}`}>
        <h1 className={`font-bold ${containerClass?.title ?? 'text-xl'}`}>{roomName}</h1>

        <p className={`text-xs ${containerClass?.text}`}>{description}</p>

        <div className={`flex items-center gap-2 text-xs ${containerClass?.gap}`}>
          <button className={`border-gray-400 focus:outline-none border rounded py-2 px-2.5 ${containerClass?.buttonClass}`}>
            {CURRENCY.DOLLAR}{price}/Night
          </button>
          <button className={`focus:outline-none rounded py-2 px-2.5 flex items-center gap-x-0.5 ${containerClass?.buttonClass}`}>
            <span>view room</span>
            <MdKeyboardArrowRight className='text-xl' />
          </button>
        </div>
      </div>
    </article>
  )
}