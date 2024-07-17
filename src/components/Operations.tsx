import React from 'react'
import { operationValues } from './constants'

interface PropsType {
  operationState: string
  onClickOperation: (e: React.MouseEvent<HTMLButtonElement>) => void
  onClickEqual: () => void
}

const Operations = ({ operationState, onClickOperation, onClickEqual }: PropsType) => {
  return (
    <div className="grid grid-cols-2 m-1 mr-0 gap-y-4">
      {operationValues.map((item) => (
        <button
          key={item}
          className={`w-[45px] h-[45px] flex items-center justify-center justify-self-center rounded-full text-2xl ${
            item === operationState ? 'bg-white text-operations' : 'bg-operations text-white'
          }`}
          value={item}
          onClick={(e) => onClickOperation(e)}
        >
          {item === '/' ? '÷' : item === '*' ? '×' : item}
        </button>
      ))}
      <button
        className="w-[105px] h-[47px] col-span-2 bg-[#b2b2b2] rounded-full text-black text-3xl"
        value="="
        onClick={onClickEqual}
      >
        =
      </button>
    </div>
  )
}

export default Operations
