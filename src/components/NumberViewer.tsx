import React from 'react'

interface PropsType {
  numberState: string
  onKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const NumberViewer = ({ numberState, onKeydown }: PropsType) => {
  return (
    <div className="w-[350px] h-[70px] m-[25_25_20_25px] bg-navy rounded-xl">
      <div className="px-5 py-3 flex justify-center items-center">
        <input
          className="pr-3 text-white text-[32px] font-normal bg-navy text-end"
          value={numberState}
          onKeyDown={onKeydown}
          readOnly
        />
      </div>
    </div>
  )
}

export default NumberViewer
