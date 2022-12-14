import React from "react";
import RemoveButton from "../UI/Button/RemoveButton";
import './Table.css';

const Table = (props) => {
    let tbody = []
    if (props.allItems) {
        tbody = props.allItems.map(e => {
            return (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.dateOfSend}</td>
                    <td>{e.forecastStart} - {e.forecastEnd}</td>
                    <td><RemoveButton remove={() => props.remove(e.id)} /></td>
                </tr>
            ) 
        })
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Дата отправки
                    </th>
                    <th>
                        Прагноз на период
                    </th>
                    <th>
                        Операции
                    </th>
                </tr>
            </thead>
            <tbody className="tableBody">
                {tbody}
            </tbody>
        </table>
    )
}

export default Table