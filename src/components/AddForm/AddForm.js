import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddForm.css';

const AddForm = (props) => {
    const [startDate, endDate] = props.dateRange;
    return (
        <form onSubmit={props.addItem}>
            <div className="dateForm">
                <div>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()}
                        selected={props.date}
                        onChange={(date) => props.setDate(date)}
                    />
                </div>
                <div className="dateFromTo">
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        placeholderText={'Период прогноза'}
                        minDate={props.date}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        onChange={(update) => {
                            props.setDateRange(update);
                        }}
                        isClearable={true}
                    />
                </div>
            </div>
            <button className="addButton" disabled={props.dateRange[1] ? false : true}>Добавить</button>
        </form>
    )
}

export default AddForm