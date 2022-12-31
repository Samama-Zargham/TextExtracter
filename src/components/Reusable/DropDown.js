/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Modal, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { heightPixel } from '../../Utils/Responsiveness';
import { fontFamilyRoboto, colors, GeneralWidth, heightPixel, IOSAndroid, widthPixel } from '../../services';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import GeneralText from './GeneralText';
import AnyIcon, { Icons } from './AnyIcon';

export const DropDown = ({ value, setValue, data, containerStyle }) => {
    const [visible, setvisible] = useState(false);
    const [isOpen, setisOpen] = useState(false)
    let activeColor = value == "Alone24 Buddies" ? colors.golden :
        value == "Rent a Buddy" || value == "Buddies" || value == "Buddies Requests" ? colors.pink :
            value == "All" || value == "Created Groups" ? colors.PrimaryColorGreen : colors.PrimaryColorBlue
    return (
        <Menu
            opened={visible}
            onBackdropPress={() => { setvisible(false), setisOpen(!isOpen) }}>
            <MenuTrigger>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[{
                        flexDirection: 'row',
                        alignItems: 'center',
                        ...GeneralWidth,

                    }, containerStyle && containerStyle]}
                    onPress={() => { setvisible(true), setisOpen(!isOpen) }}
                >
                    <GeneralText
                        text={value}
                        lineHeight={30}
                        fontWeight={600}
                        font={20}
                        Color={activeColor}
                        extraStyle={{}}
                    />
                    <AnyIcon
                        onPress={() => { setvisible(true), setisOpen(!isOpen) }}
                        type={Icons.AntDesign}
                        name={"caretdown"}
                        size={12}
                        color={activeColor}
                        style={{ marginLeft: 12, top: 1.5 }}
                    />
                </TouchableOpacity>
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
                {data?.map((item, index) => (
                    <MenuOption onSelect={() => { setvisible(false), setValue(item), setisOpen(!isOpen) }}
                        key={index}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => { setvisible(false), setValue(item), setisOpen(!isOpen) }}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginHorizontal: 10,
                            }}>
                            <Text

                                style={{
                                    color: item == value ? activeColor : colors.textColor,
                                    fontSize: 16,
                                    fontFamily: fontFamilyRoboto[item == value ? 600 : 400],
                                    flex: 1
                                }}>
                                {item}
                            </Text>
                            {item == value &&
                                <AnyIcon
                                    onPress={() => setvisible(true)}
                                    type={Icons.Entypo}
                                    name="check"
                                    size={18}
                                    color={activeColor}
                                />
                            }
                        </TouchableOpacity>
                    </MenuOption>
                ))}
            </MenuOptions>
        </Menu >
    );
}
const optionsStyles = {
    optionsContainer: {
        marginTop: heightPixel(35),
        marginLeft: heightPixel(20),
        ...IOSAndroid.elevation10,
        paddingVertical: heightPixel(15),
        zIndex: 1000
    },
};






// export const DropDown2 = ({ value, setValue, data, headText }) => {
//     const [visible, setVisible] = useState(false);
//     const DropdownButton = React.useRef();
//     const [dropdownTop, setDropdownTop] = useState(0);

//     const toggleDropdown = () => {
//         visible ? setVisible(false) : openDropdown();
//     };

//     const openDropdown = () => {
//         DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
//             setDropdownTop(py + h);
//         });
//         setVisible(true);
//     };

//     const RenderDropdown = () => {

//         const renderItem = ({ item }) => (
//             <TouchableOpacity activeOpacity={0.7}
//                 onPress={() => onItemPress(item)}
//                 style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     paddingVertical: 11,
//                     marginTop: 1,
//                     ...GeneralPaddingLeft.marginLeft, ...IOSAndroid.elevation1, backgroundColor: "white"
//                 }}>
//                 <Text
//                     style={{
//                         color: item == value ? COLORS.PRIMARY_Red : COLORS.textColor,
//                         fontSize: 16,
//                         fontFamily: fontFamily[400],
//                         flex: 1,
//                         marginLeft: 20
//                     }}>
//                     {item}
//                 </Text>
//             </TouchableOpacity>
//         );
//         const onItemPress = (item) => {
//             setValue(item)
//             setVisible(false);
//         };
//         if (visible) {
//             return (
//                 <Modal visible={visible} transparent >
//                     <TouchableOpacity
//                         style={styles.overlay}
//                         onPress={() => setVisible(false)}
//                     >
//                         <View style={[styles.dropdown, { top: dropdownTop }]}>
//                             <FlatList
//                                 data={data}
//                                 renderItem={renderItem}
//                                 keyExtractor={(item, index) => index.toString()}
//                             />
//                         </View>
//                     </TouchableOpacity>
//                 </Modal>
//             );
//         }
//     };

//     return (
//         <>
//             {
//                 headText &&
//                 <GeneralText
//                     text={headText}
//                     lineHeight={heightPixel(18)}
//                     fontWeight={600}
//                     font={14}
//                     extraStyle={{
//                         marginTop: heightPixel(10),
//                         ...GeneralPaddingLeft.marginLeft
//                     }}
//                 />
//             }

//             <TouchableOpacity
//                 ref={DropdownButton}
//                 style={styles.button}
//                 onPress={toggleDropdown}
//             >
//                 <View style={{ marginVertical: 5 }}>
//                     <RenderDropdown />
//                 </View>

//                 <GeneralText
//                     text={value}
//                     fontWeight={400}
//                     Color={COLORS.textColor}
//                     font={18}
//                     lineHeight={26}
//                     extraStyle={{ marginVertical: 5, flex: 1 }}
//                 />
//                 <AnyIcon
//                     onPress={toggleDropdown}
//                     type={Icons.AntDesign}
//                     name="down"
//                     size={18}
//                     color={COLORS.textColor}
//                 />
//             </TouchableOpacity>
//         </>

//     );
// }



// /* eslint-disable react-native/no-inline-styles */
// // import {StyleSheet, Text, View} from 'react-native'
// // import React, {useState} from 'react'
// // import {COLORS, GeneralPaddingLeft} from '../../Utils/AppStyles'
// // import DropDownPicker from 'react-native-dropdown-picker'

// // const DropDown = ({value, setValue}) => {
// //     const [open, setOpen] = useState(false)
// //     const [items, setItems] = useState([
// //         {label: 'Apple', value: 'apple', disabled: true },
// //         {label: 'Banana', value: 'banana' }
// //     ]);
// //     return (
// //         <DropDownPicker
// //             itemSeparator={true}
// //             open={open}
// //             value={value}
// //             setOpen={setOpen}
// //             setValue={setValue}
// //             items={items}
// //             setItems={setItems}
// //         // placeholder="Select an item"
// //         />
// //     );
// // }

// // export default DropDown

// // const styles = StyleSheet.create({})



// const styles = StyleSheet.create({
//     button: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         height: heightPixel(50),
//         zIndex: 1,
//         ...GeneralPaddingLeft.marginLeft,
//         borderColor: COLORS.textColor,
//         borderWidth: 1,
//         borderRadius: 100,
//         paddingHorizontal: 15
//     },
//     dropdown: {
//         position: 'absolute',
//         backgroundColor: '#fff',
//         width: '100%',
//         shadowColor: '#000000',
//         shadowRadius: 4,
//         shadowOffset: { height: 4, width: 0 },
//         shadowOpacity: 0.5,
//     },
// });





// export const DropDown = ({ value, setValue, data, headText }) => {
//     const [visible, setvisible] = useState(false);
//     const [isOpen, setisOpen] = useState(false)
//     return (
//         <Menu
//             opened={visible}
//             onBackdropPress={() => { setvisible(false), setisOpen(!isOpen) }}>
//             <MenuTrigger>
//                 {
//                     headText &&
//                     <GeneralText
//                         text={headText}
//                         lineHeight={heightPixel(18)}
//                         fontWeight={600}
//                         font={14}
//                         extraStyle={{
//                             marginTop: heightPixel(10),
//                             ...GeneralWidth
//                         }}
//                     />
//                 }
//                 <TouchableOpacity
//                     activeOpacity={0.8}
//                     style={{
//                         flexDirection: 'row',
//                         alignItems: 'center',
//                         height: heightPixel(50),
//                         zIndex: 1,
//                         ...GeneralWidth,
//                         borderColor: colors.textColor,
//                         borderWidth: 1,
//                         borderRadius: 50,
//                         paddingHorizontal: 15,
//                     }}
//                     onPress={() => { setvisible(true), setisOpen(!isOpen) }}
//                 >
//                     <Text style={{
//                         flex: 1,
//                         fontFamily: fontFamilyRoboto[400],
//                         color: colors.textColor
//                     }}>{value}</Text>
//                     <AnyIcon
//                         onPress={() => { setvisible(true), setisOpen(!isOpen) }}
//                         type={Icons.AntDesign}
//                         name={isOpen ? "up" : "down"}
//                         size={18}
//                         color={colors.textColor}
//                     />
//                 </TouchableOpacity>
//             </MenuTrigger>
//             <MenuOptions customStyles={optionsStyles}>
//                 {data?.map((item, index) => (
//                     <MenuOption onSelect={() => { setvisible(false), setValue(item), setisOpen(!isOpen) }}
//                         key={index}>
//                         <TouchableOpacity
//                             activeOpacity={0.9}
//                             onPress={() => { setvisible(false), setValue(item), setisOpen(!isOpen) }}
//                             style={{
//                                 flexDirection: 'row',
//                                 alignItems: 'center',
//                                 borderColor: colors.textColor,
//                                 borderTopWidth: 1,
//                                 paddingTop: 11,
//                                 marginHorizontal: 10,
//                             }}>
//                             <Text
//                                 style={{
//                                     color: item?.label == value ? colors.PrimaryColorBlue : colors.textColor,
//                                     fontSize: 16,
//                                     fontFamily: fontFamilyRoboto[400],
//                                     flex: 1
//                                 }}>
//                                 {item}
//                             </Text>
//                             {item == value &&
//                                 <AnyIcon
//                                     onPress={() => setvisible(true)}
//                                     type={Icons.Ionicons}
//                                     name="checkmark-sharp"
//                                     size={18}
//                                     color={colors.PrimaryColorBlue}
//                                 />}
//                         </TouchableOpacity>
//                     </MenuOption>
//                 ))}
//             </MenuOptions>
//         </Menu >
//     );
// }
// const optionsStyles = {
//     optionsContainer: {
//         marginTop: 47,
//         marginLeft: 36,
//         ...IOSAndroid.elevation10,
//         paddingVertical: 10,
//         width: "80%",
//         zIndex: 1000
//     },
// };
