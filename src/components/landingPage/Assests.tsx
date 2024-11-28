import { FaCube } from "react-icons/fa6";

type AssetsProps = {
  title: string;
  description: string;
  containerClass?: {
    text?: string,
    title?: string,
  }
}

export default function Assets(
  {
    title, description,
    containerClass,
  }: AssetsProps) {

  return (
    <article className='flex flex-col midScreen:h-auto gap-y-1 midScreen:w-full md:min-w-44 md:max-w-48 p-2'>
      
      <FaCube className='text-xl' />

      <div className='flex flex-col md:gap-y-2 midScreen:gap-y-2 py-1.5 pb-3'>
        <h1 className={`font-semibold text-[13px] midScreen:text-xl midScreen:font-bold ${containerClass?.title}`}>{title}</h1>

        <p className={`text-[11px] md:text-[10px] ${containerClass?.text}`}>{description}</p>
      </div>

    </article>
  )
}