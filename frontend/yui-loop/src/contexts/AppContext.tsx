import React, { useState, FC, ReactNode } from 'react';
import { WaitingPassengerType } from '../types/WaitingPassengerType';

interface Props {
    children: ReactNode;
}

export interface AppState {
    id: string
    timeToAdd: string
    setTimeToAdd: React.Dispatch<React.SetStateAction<string>>
    departurePlaceToAdd: string
    setDeparturePlaceToAdd: React.Dispatch<React.SetStateAction<string>>
    destinationToAdd: string
    setDestinationToAdd: React.Dispatch<React.SetStateAction<string>>
    capacityToAdd: string
    setCapacityToAdd: React.Dispatch<React.SetStateAction<string>>  
    waitingPassengers:  Array<WaitingPassengerType>
    setWaitingPassengers: React.Dispatch<React.SetStateAction<Array<WaitingPassengerType>>>
    deleteWaitingPassenger: Function
    memo: string
    setMemo: React.Dispatch<React.SetStateAction<string>>
    date: Date
    setDate: React.Dispatch<React.SetStateAction<Date>>
}

export const AppContext = React.createContext({} as AppState);

export const AppContextProvider: FC<Props> = ({ children }) => { 
    const [id, setId] = useState("");
    const [timeToAdd, setTimeToAdd] = useState("1限休み(10:00~10:10)");
    const [departurePlaceToAdd, setDeparturePlaceToAdd] = useState("工学部駐車場");
    const [destinationToAdd, setDestinationToAdd] = useState("工学部駐車場");
    const [capacityToAdd, setCapacityToAdd] = useState("1");
    const [waitingPassengers, setWaitingPassengers] = useState<Array<WaitingPassengerType>>([]);
    const [memo, setMemo] = useState<string>("");
    const [date, setDate] = useState(new Date());
    const deleteWaitingPassenger = (id:number) => {
        const tempList = [...waitingPassengers];
        // id番目の要素を削除する
        tempList.splice(id, 1);
        setWaitingPassengers(tempList);
    }
    return (
        <AppContext.Provider value={{
            id,
            timeToAdd,
            setTimeToAdd,
            departurePlaceToAdd,
            setDeparturePlaceToAdd,
            destinationToAdd,
            setDestinationToAdd,
            capacityToAdd,
            setCapacityToAdd,
            waitingPassengers,
            setWaitingPassengers,
            deleteWaitingPassenger,
            memo,
            setMemo,
            date,
            setDate
        }}>
            { children }
        </AppContext.Provider>
    );
};