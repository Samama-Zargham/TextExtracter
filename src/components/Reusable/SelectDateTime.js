/* eslint-disable prettier/prettier */
import { View } from 'react-native'
import React, { useState } from 'react'
import PrimaryInput from './PrimaryInput'
import { GeneralWidth } from '../../services'
import { CalenderIcon, TimeClockIcon } from '../../assets'
import DateTimePicker from './DateTimePicker'
import moment from 'moment';

const SelectDateTime = ({
    head1 = "",
    head2 = "",
    placeholder1 = "",
    placeholder2 = "",
}) => {
    const [Time, setTime] = useState()
    const [date, setdate] = useState()
    const [openDatePicker, setopenDatePicker] = useState(false)
    const [openTimePicker, seopenTimePicker] = useState(false)
    const [mode, setmode] = useState('date')

    return (
        <View style={{
            flexDirection: "row",
            ...GeneralWidth,
            justifyContent: "space-between"
        }} >
            <PrimaryInput
                onPress={() => [setopenDatePicker(true), setmode("date")]}
                disabled={true}
                inputWidth={178}
                top={22}
                head={head1}
                placeholder={date ? date.toString() : placeholder1}
                isRightIcon={CalenderIcon}
            />
            <PrimaryInput
                onPress={() => [seopenTimePicker(true), setmode("time")]}
                disabled={true}
                inputWidth={178}
                top={22}
                head={head2}
                placeholder={Time ? Time.toString() : placeholder2}
                isRightIcon={TimeClockIcon}
            />
            <DateTimePicker
                open={openTimePicker || openDatePicker}
                setopen={() => { setopenDatePicker(false), seopenTimePicker(false) }}
                state={new Date()}
                setState={(date) =>
                    openDatePicker && setdate(moment(date).format("DD/MM/YYYY"))
                    ||
                    openTimePicker && setTime(moment(date).format("LT"))
                }
                mode={mode}
            />
        </View>
    )
}

export default SelectDateTime