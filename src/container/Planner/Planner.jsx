import React, { useEffect, useState } from "react";
import { apiPlanner } from "../../api/apiPlanner";
import AddForm from "../../components/AddForm/AddForm";
import Table from "../../components/Table/Table";
import './Planner.css';

const Planner = () => {
    const [allItems, setAllItems] = useState([])
    const [date, setDate] = useState(new Date());
    const [dateRange, setDateRange] = useState([null, null]);

    const getItem = async () => {
        await apiPlanner.getItem().then(data => {
            if(data) {
                setAllItems(data)
            }
        })
    }

    useEffect(() => {
        getItem()
    }, [])

    const remove = async (id) => {
        await apiPlanner.deleteItem(id)
        getItem()
    }

    const addItem = async (e) => {
        e.preventDefault()
        let send = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
        let start = dateRange[0].getFullYear() + '-' + dateRange[0].getMonth() + '-' + dateRange[0].getDate()
        let end = dateRange[1].getFullYear() + '-' + dateRange[1].getMonth() + '-' + dateRange[1].getDate()
        await apiPlanner.addItem(send, start, end)
        setDateRange([null, null])
        getItem()
    }

    return (
        <div className="planner">
            <h1>Планировщик</h1>
            <h3>Запланированные задачи</h3>
            <Table
                remove={(id) => remove(id)}
                allItems={allItems} 
            />
            
            <div className="addFormDiv">
                <h3>Добавить новую</h3>
                <AddForm
                    date={date}
                    setDate={setDate}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                    addItem={(e) => addItem(e)}
                />
            </div>
        </div>
    )
}

export default Planner;