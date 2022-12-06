import { WaitingPassengerType } from '../types/WaitingPassengerType';
import React, { FC, useContext } from 'react'
import {DeleteContext} from '../contexts/DeleteContext'

interface WaitingPassengerProps {
  waitingPassenger: WaitingPassengerType,
  id: number
}

const WaitingPassenger: FC<WaitingPassengerProps> = (props) => { 
  const wp = props.waitingPassenger
  const deleteContext = useContext(DeleteContext)

  return (
    <>
      <div>
        <br/>
        日時：{wp.month}/{wp.date}<br/>
        出発場所：{wp.start}　→　到着場所：{wp.destination}<br/>
        出発時間：{wp.time}<br/>
        定員：{wp.capacity}<br/>
        <button onClick={()=>{deleteContext.deleteWaitingPassenger(props.id)}}>募集中止</button>
      </div>
    
    </>
  )
}

export default WaitingPassenger