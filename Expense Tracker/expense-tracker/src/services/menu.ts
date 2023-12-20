import axios from 'axios'
import IDataList from '../model/Idatalist'


const getDataFromServer = () => {
    return axios.get<IDataList[]>('http://localhost:3000/items')
    .then(res => res.data)
}

const pushDataToServer = (newExpense :Omit<IDataList, 'id'>) => {
    console.log(newExpense)
    return axios.post<IDataList>(
        'http://localhost:3000/items',
        newExpense,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then (res => res.data)
};

export{
    getDataFromServer, pushDataToServer
}