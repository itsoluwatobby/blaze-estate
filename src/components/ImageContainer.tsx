import React from 'react'

type ImageContainerProps = {
  source: string;
  name: string;
  classNames?: string;
  imageClassNames?: string;
}

export default function ImageContainer({ source, name, classNames, imageClassNames }: ImageContainerProps) {
  return (
    <figure className={`rounded maxMobile:w-full flex-none md:w-72 w-1/2 h-80 ${classNames}`}>
      <img src={source} alt={name} className={`rounded object-cover w-full h-full ${imageClassNames}`} />
    </figure>
  )
}