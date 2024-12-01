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
    <article className={`border shadow rounded flex flex-col midScreen:h-auto gap-y-1 midScreen:w-full md:min-w-44 md:max-w-48 ${containerClass?.container}`}>
      <ImageContainer source={imageSource} name={imageName} 
      classNames={classNames ?? 'md:w-full w-full md:h-20 midScreen:h-72 rounded-none'} imageClassNames={imageClassNames ?? 'rounded-none'}
      />

      <div className={`flex flex-col md:gap-y-2 midScreen:gap-y-2 p-2 py-1.5 pb-3 ${containerClass?.lowerContainer}`}>
        <h1 className={`font-semibold text-[13px] midScreen:text-xl midScreen:font-bold ${containerClass?.title}`}>{roomName}</h1>

        <p className={`text-[11px] md:text-[10px] ${containerClass?.text}`}>{description}</p>

        <div className={`flex items-center gap-2 text-xs md:gap-0 midScreen:gap-y-2 ${containerClass?.gap}`}>
          <button className={`border-gray-400 focus:outline-none border rounded text-[10px] h-8 px-1.5 whitespace-nowrap ${containerClass?.buttonClass}`}>
            {CURRENCY.DOLLAR}{price}/Night
          </button>
          <button className={`focus:outline-none rounded flex items-center gap-x-0.5 text-[11px] h-8 px-1.5 whitespace-nowrap ${containerClass?.buttonClass}`}>
            <span>view room</span>
            <MdKeyboardArrowRight className='text-xl' />
          </button>
        </div>
      </div>
    </article>
  )
}