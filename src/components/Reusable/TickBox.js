import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { heightPixel, widthPixel } from '../../services'
import { NotRemind, Remind } from '../../assets'

export const TickBox = ({ }) => {
    const [isSelect, setisSelect] = useState(false)
    return (
        <TouchableOpacity activeOpacity={0.6}
            onPress={() => setisSelect(!isSelect)}
        >
            {
                !isSelect ?
                    <NotRemind height={heightPixel(20)}
                        width={widthPixel(20)} />
                    :
                    <Remind height={heightPixel(20)}
                        width={widthPixel(20)} />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})