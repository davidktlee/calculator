import React, { useEffect, useReducer } from 'react'
import NumberViewer from './NumberViewer'
import Numbers from './Numbers'
import Operations from './Operations'
import { keyCodes } from './constants'
import { isNumber } from './util/checkKeyType'
import { calcFunc } from './util/calcFunc'

type State = {
  numberState: string
  operationState: string
  initNumber: string
}

type Action =
  | { type: 'SET_NUMBER'; payload: string }
  | { type: 'SET_OPERATION'; payload: string }
  | { type: 'CLEAR' }
  | { type: 'CALCULATE' }
  | { type: 'BACKSPACE' }

const initialState: State = {
  numberState: '0',
  operationState: '',
  initNumber: '',
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_NUMBER':
      return {
        ...state,
        numberState:
          state.numberState === '0' ? action.payload : state.numberState + action.payload,
      }
    case 'SET_OPERATION':
      return {
        ...state,
        operationState: action.payload,
        initNumber: state.numberState,
        numberState: '0',
      }
    case 'CLEAR':
      return initialState
    case 'CALCULATE':
      const calculatedNum = calcFunc(
        state.initNumber,
        state.operationState,
        state.numberState
      ).toString()
      return { ...state, numberState: calculatedNum, operationState: '', initNumber: '' }
    case 'BACKSPACE':
      return { ...state, numberState: state.numberState.slice(0, -1) || '0' }
    default:
      return state
  }
}

const Container = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key, keyCode } = e

    if (!isNumber(keyCode) && !keyCodes.includes(key)) {
      alert('호환되지 않는 연산자입니다.')
      return
    }

    if (key === 'Backspace') {
      dispatch({ type: 'BACKSPACE' })
    } else if (key === 'Enter') {
      if (state.operationState === '/' && state.numberState === '0') {
        alert('0은 나눌 수 없습니다.')
        dispatch({ type: 'CLEAR' })
        return
      }
      dispatch({ type: 'CALCULATE' })
    } else if (keyCodes.includes(key) && key !== 'Shift') {
      dispatch({ type: 'SET_OPERATION', payload: key })
    } else if (isNumber(keyCode)) {
      dispatch({ type: 'SET_NUMBER', payload: key })
    }
  }

  const onClickOperation = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget
    if (value === state.operationState) {
      dispatch({ type: 'SET_OPERATION', payload: '' })
    } else {
      dispatch({ type: 'SET_OPERATION', payload: value })
    }
  }

  const onClickEqual = () => {
    if (state.operationState === '/' && state.numberState === '0') {
      alert('0은 나눌 수 없습니다.')
      dispatch({ type: 'CLEAR' })
      return
    }
    dispatch({ type: 'CALCULATE' })
  }

  const onClickNumber = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget

    dispatch({ type: 'SET_NUMBER', payload: value })
  }

  const clearNumberState = () => {
    dispatch({ type: 'CLEAR' })
  }

  useEffect(() => {
    const biggestInt = Number.MAX_SAFE_INTEGER
    if (Number(state.numberState) >= biggestInt) {
      alert('최대 수를 초과합니다.')
      dispatch({ type: 'CLEAR' })
    }
  }, [state.numberState])

  return (
    <div className="w-[400px] h-[367px] flex flex-col justify-center bg-background p-[25px]">
      <NumberViewer numberState={state.numberState} onKeydown={onKeydown} />
      <div className="flex mt-5 gap-x-3 justify-between">
        <Numbers onClickNumber={onClickNumber} clearNumberState={clearNumberState} />
        <Operations
          operationState={state.operationState}
          onClickOperation={onClickOperation}
          onClickEqual={onClickEqual}
        />
      </div>
    </div>
  )
}

export default Container
