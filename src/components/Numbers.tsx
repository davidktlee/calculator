import React from 'react'

interface PropsType {
  onClickNumber: (e: React.MouseEvent<HTMLButtonElement>) => void
  clearNumberState: () => void
}

const Numbers = ({ onClickNumber, clearNumberState }: PropsType) => {
  return (
    <div className="grow-[5] grid grid-cols-3 gap-y-[10px]">
      {Array.from({ length: 9 }, (v, i) => String(i + 1)).map((item) => (
        <button
          key={item}
          className="w-[65px] h-[45px] m-1 flex items-center justify-center bg-number rounded-full 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-2xl text-white"
          value={item}
          onClick={onClickNumber}
        >
          {item}
        </button>
      ))}
      <button
        className="w-[65px] h-[45px] m-1 flex items-center justify-center bg-number rounded-full 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-2xl text-white"
        value="."
        onClick={onClickNumber}
      >
        .
      </button>
      <button
        className="w-[65px] h-[45px] m-1 flex items-center justify-center bg-number rounded-full 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-2xl text-white"
        value="0"
        onClick={onClickNumber}
      >
        0
      </button>{' '}
      <button
        className="w-[65px] h-[45px] m-1 flex items-center justify-center bg-number rounded-full 
            shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-white"
        onClick={clearNumberState}
      >
        <img src="/image1.png" alt="erase" />
      </button>
    </div>
  )
}

export default Numbers
