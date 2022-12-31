/* eslint-disable prettier/prettier */
import { Text } from 'react-native'
import React, { useState } from 'react'
import { largeGroupDescription, smallGroupDescription } from '../../screens/appFlow/groups/GroupDetails'
import GeneralText from './GeneralText'
import { colors } from '../../services'

const ShowMoreText = ({ smallText, largeText, setState }) => {
    const [Readmore, setReadmore] = useState(false)
    return (
        <Text  >
            <GeneralText
                text={Readmore ? largeGroupDescription + "..." : smallGroupDescription + "..."}
            />
            <GeneralText
                Color={colors.PrimaryColorBlue}
                onPress={() => [setState && setState(!Readmore), setReadmore(!Readmore)]}
                text={Readmore ? "show less" : "Read more"}
            />
        </Text>
    )
}

export default ShowMoreText
