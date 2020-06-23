import React, { useState, useRef, useEffect, useMemo } from "react";
import "./index.scss";

interface IIconPopupProps {
  popupContent: JSX.Element;
  popupTriggerer: JSX.Element;
  containerStyle?: { [key: string]: string };
  arrowStyle?: { [key: string]: string };
  popupStyle?: { [key: string]: string };
  onPopupTrigger?: (
    isOpen: boolean,
    event: React.MouseEvent<HTMLDivElement>
  ) => void;
  popupWidthInPx: number;
  popupMaxHeightInPx?: number;
}

export default function IconPopup({
  popupContent,
  popupTriggerer,
  containerStyle = {},
  arrowStyle: {
    top: arrowTopIgnore,
    left: arrowLeftIgnore,
    ...arrowStyle
  } = {},
  popupStyle: {
    top: popupTopIgnore,
    left: popupLeftIgnore,
    ...popupStyle
  } = {},
  onPopupTrigger,
  popupWidthInPx,
  popupMaxHeightInPx,
}: IIconPopupProps): JSX.Element {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const [position, setPosition] = useState<string>("right");

  useEffect(() => {
    if (
      wrapperRef.current &&
      // @ts-ignore
      wrapperRef.current.offsetLeft > window.innerWidth / 2
    ) {
      setPosition("left");
    }
  }, [wrapperRef]);

  const triggerWidth = useMemo(() => {
    if (
      triggerRef.current &&
      // @ts-ignore
      triggerRef.current.offsetWidth
    ) {
      // @ts-ignore
      console.log(triggerRef?.current?.offsetWidth);
      // @ts-ignore
      return triggerRef?.current?.offsetWidth;
    }
  }, [triggerRef.current]);

  useEffect(() => {
    if (isPopupOpen) {
      const removePopup = (event: React.MouseEvent) => {
        // @ts-ignore
        if (!wrapperRef?.current?.contains(event.target as Node)) {
          setIsPopupOpen(false);
        }
      };
      // @ts-ignore
      document.addEventListener("mousedown", removePopup);
      return () => {
        // @ts-ignore
        document.removeEventListener("mousedown", removePopup);
      };
    }
  }, [isPopupOpen]);

  return (
    <div style={containerStyle} className="whole-container" ref={wrapperRef}>
      <div
        onClick={(event) => {
          if (onPopupTrigger) {
            onPopupTrigger(!isPopupOpen, event);
          }
          setIsPopupOpen(!isPopupOpen);
        }}
        ref={triggerRef}
        className="icon-container"
      >
        {popupTriggerer}
      </div>
      <div
        className={`popup-container ${
          isPopupOpen ? "show-popup" : "hide-popup"
        }`}
        style={{
          left:
            position === "right"
              ? `${triggerWidth / 2 - 15}px`
              : `-${popupWidthInPx - triggerWidth / 2 - 15}px`,
          maxHeight: popupMaxHeightInPx ? `${popupMaxHeightInPx}px` : undefined,
        }}
      >
        <div
          className={`popup-arrow`}
          style={{
            ...arrowStyle,
            left:
              position === "left"
                ? `${popupWidthInPx - triggerWidth / 2 - 7.5}px`
                : "7.5px",
          }}
        />
        <div
          className={`popup-content`}
          style={{
            ...popupStyle,
            width: popupWidthInPx,
          }}
        >
          {popupContent}
        </div>
      </div>
    </div>
  );
}
