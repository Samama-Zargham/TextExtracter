/* eslint-disable prettier/prettier */
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { colors, GeneralWidth, heightPixel, widthPixel } from '../../services'
import { SelectUnSelectItems } from '../../services/MyCommon/Common'
import GeneralText from './GeneralText'
import { DATA } from '../../screens/appFlow/Interest/Interest'

const SelectedInterests = ({ Data = DATA, SelectedItem, setSelectedItem, textcolor }) => {
    return (
        <View style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            ...GeneralWidth
        }}>
            {Data?.map((item, index) => {
                return (
                    <View key={index}>
                        <Options
                            onPress={() => {
                                SelectUnSelectItems(item, SelectedItem, setSelectedItem)
                            }}
                            myStl={SelectedItem.includes(item.id)}
                            title={item.title}
                            textcolor={textcolor}
                        />
                    </View>

                )
            })
            }
        </View>
    )
}
const Options = ({ title, onPress, myStl, textcolor }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.boxes,
            {
                borderColor: myStl ? colors.PrimaryColorGreen : colors.lightGray,
                backgroundColor: myStl ? colors.PrimaryColorGreen : colors.white
            }]}>
            <GeneralText
                Color={myStl ? colors.white : textcolor ? textcolor : colors.textColor}
                font={20}
                fontWeight={400}
                text={title}
                lineHeight={30}
            />
        </TouchableOpacity>
    )
}
export default SelectedInterests

const styles = StyleSheet.create({
    boxes: {
        marginTop: heightPixel(24),
        borderWidth: 1,
        borderRadius: 8,
        marginRight: widthPixel(14),
        paddingVertical: 8,
        paddingHorizontal: 10
    },
})