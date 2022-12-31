/* eslint-disable prettier/prettier */
import React from 'react'
import DatePicker from 'react-native-date-picker'

const DateTimePicker = ({ open, setopen, setState, state, mode }) => {
    return (
        <DatePicker
            mode={mode ? mode : "datetime"}
            modal
            open={open}
            date={state}
            onConfirm={(value) => {
                setopen()
                setState(value)
            }}
            onCancel={() => {
                setopen()
            }}
        />
    )
}

export default DateTimePicker
