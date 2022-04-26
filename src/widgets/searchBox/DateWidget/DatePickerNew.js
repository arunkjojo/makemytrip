import React, {useState} from 'react'

const DatePickerNew = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            showNextMonths
            minDate={new Date()}
            onChange={(date) => setStartDate(date)}
            monthsShown={2}
            dateFormat="dd MMM yy"
        />
    )
}

export default DatePickerNew