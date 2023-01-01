import { NativeModules } from 'react-native';


const { TextRecognitionModule } = NativeModules;

export type Rect = {
    left: number;
    top: number;
    height: number;
    width: number;
};
export type Element = {
    text: string;
    rect: Rect;
};
export type Symbol = {
    text: string;
    rect: Rect;
};
export type Line = {
    text: string;
    rect: Rect;
};
export type Block = {
    text: string;
    rect: Rect;
    lines: Line[];
    symbols: Symbol[];
    elements: Element[];
};
export type Response = {
    width: number;
    height: number;
    blocks: Block[];
};

export const recognizeImage = (url: string): Promise<Response> => {
    return TextRecognitionModule.recognizeImage(url);
}