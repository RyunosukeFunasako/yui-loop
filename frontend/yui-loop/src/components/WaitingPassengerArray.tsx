import React, {FC} from 'react'
import WaitingPassenger from './WaitingPassenger'
import { WaitingPassengerType } from '../types/WaitingPassengerType'

interface WaitingPassengerArrayProps {
  waitingPassengers: Array<WaitingPassengerType> | null,
}

const WaitingPassengerArray: FC<WaitingPassengerArrayProps> = (props) => {
  return (
    <>
      {props.waitingPassengers == null ? (<>no data</>):(
        props.waitingPassengers.map((waitingPassenger, id) => (
        <WaitingPassenger
                  waitingPassenger={waitingPassenger}
                  key={id}
                  id = {id}/>
        )))}
      {}
    </>
  )
}

export default WaitingPassengerArray