import React, { ReactNode } from 'react'

interface ObjectStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  title?: string
  height?: number
  width?: number
  src?: string
}

export type ContentType = 'heading-three' | 'paragraph' | 'heading-four' | 'image'

export const getContentFragment = (
  index: number,
  text: string | ReactNode[],
  obj: ObjectStyle | null,
  type: ContentType
): ReactNode => {
  let modifiedText: ReactNode | ReactNode[] = text

  if (obj != null) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>
    }
  }

  switch (type) {
    case 'heading-three':
      return (
        <h3 key={index} className='mb-4 text-xl font-semibold'>
          {modifiedText}
        </h3>
      )
    case 'paragraph':
      return (
        <p key={index} className='mb-8'>
          {modifiedText}
        </p>
      )
    case 'heading-four':
      return (
        <h4 key={index} className='mb-4 font-semibold text-md'>
          {modifiedText}
        </h4>
      )
    case 'image':
      return (
        <img
          key={index}
          alt={obj?.title || ''}
          height={obj?.height || 100}
          width={obj?.width || 100}
          src={obj?.src || ''}
        />
      )
    default:
      return modifiedText
  }
}
