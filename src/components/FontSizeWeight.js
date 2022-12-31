/* eslint-disable prettier/prettier */
import React from 'react'
import GeneralText from './Reusable/GeneralText'

export const FontSize24w700 = ({ text, fontWeight }) => (
    <GeneralText
        text={text}
        font={16}
        fontWeight={fontWeight ? fontWeight : 500}
        lineHeight={21}
    />
)