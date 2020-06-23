import React from "react";
import "./index.scss";
interface IIconPopupProps {
    popupContent: JSX.Element;
    popupTriggerer: JSX.Element;
    containerStyle?: {
        [key: string]: string;
    };
    arrowStyle?: {
        [key: string]: string;
    };
    popupStyle?: {
        [key: string]: string;
    };
    onPopupTrigger?: (isOpen: boolean, event: React.MouseEvent<HTMLDivElement>) => void;
    popupWidthInPx: number;
    popupMaxHeightInPx?: number;
}
export default function IconPopup({ popupContent, popupTriggerer, containerStyle, arrowStyle: { top: arrowTopIgnore, left: arrowLeftIgnore, ...arrowStyle }, popupStyle: { top: popupTopIgnore, left: popupLeftIgnore, ...popupStyle }, onPopupTrigger, popupWidthInPx, popupMaxHeightInPx, }: IIconPopupProps): JSX.Element;
export {};
