import React, { useState, useRef, useEffect, useMemo } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var e=[],t=[];function injector_86af753e(n,r){if(n&&"undefined"!=typeof document){void 0===r&&(r={});var d,a=!0===r.prepend?"prepend":"append",i="undefined"!=typeof r.singleTag&&r.singleTag,s="undefined"!=typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(i){var u=e.indexOf(s);-1===u&&(u=e.push(s)-1,t[u]={}),d=t[u]&&t[u][a]?t[u][a]:t[u][a]=o();}else d=o();65279===n.charCodeAt(0)&&(n=n.substring(1)),d.styleSheet?d.styleSheet.cssText+=n:d.appendChild(document.createTextNode(n));}function o(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var d="prepend"===a?"afterbegin":"beforeend";return s.insertAdjacentElement(d,e),e}}

const css_c9fe2d6b = ".whole-container {\n  position: relative;\n  box-sizing: border-box; }\n  .whole-container .show-popup {\n    opacity: 1;\n    visibility: visible; }\n  .whole-container .hide-popup {\n    opacity: 0;\n    visibility: hidden; }\n  .whole-container .icon-container {\n    display: inline-block;\n    clear: both;\n    float: left; }\n  .whole-container .popup-container {\n    position: relative;\n    transition: all 200ms ease;\n    top: 45px; }\n    .whole-container .popup-container .popup-content {\n      box-sizing: border-box;\n      background-color: white;\n      border: solid 1px lightgrey;\n      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n      position: absolute;\n      overflow: scroll;\n      z-index: 500;\n      padding: 10px;\n      top: 0px; }\n    .whole-container .popup-container .popup-arrow {\n      position: absolute;\n      padding: 8px;\n      transform: rotate(-45deg);\n      background-color: white;\n      border-right: solid 1px lightgrey;\n      border-top: solid 1px lightgrey;\n      z-index: 501;\n      top: -8px; }\n";
injector_86af753e(css_c9fe2d6b);

function IconPopup(_a) {
    var popupContent = _a.popupContent, popupTriggerer = _a.popupTriggerer, _b = _a.containerStyle, containerStyle = _b === void 0 ? {} : _b, _c = _a.arrowStyle, _d = _c === void 0 ? {} : _c, arrowTopIgnore = _d.top, arrowLeftIgnore = _d.left, arrowStyle = __rest(_d, ["top", "left"]), _e = _a.popupStyle, _f = _e === void 0 ? {} : _e, popupTopIgnore = _f.top, popupLeftIgnore = _f.left, popupStyle = __rest(_f, ["top", "left"]), onPopupTrigger = _a.onPopupTrigger, popupWidthInPx = _a.popupWidthInPx, popupMaxHeightInPx = _a.popupMaxHeightInPx;
    var _g = useState(false), isPopupOpen = _g[0], setIsPopupOpen = _g[1];
    var wrapperRef = useRef(null);
    var triggerRef = useRef(null);
    var _h = useState("right"), position = _h[0], setPosition = _h[1];
    useEffect(function () {
        if (wrapperRef.current &&
            // @ts-ignore
            wrapperRef.current.offsetLeft > window.innerWidth / 2) {
            setPosition("left");
        }
    }, [wrapperRef]);
    var triggerWidth = useMemo(function () {
        var _a;
        if (triggerRef.current &&
            // @ts-ignore
            triggerRef.current.offsetWidth) {
            // @ts-ignore
            return (_a = triggerRef === null || triggerRef === void 0 ? void 0 : triggerRef.current) === null || _a === void 0 ? void 0 : _a.offsetWidth;
        }
    }, [triggerRef.current]);
    useEffect(function () {
        if (isPopupOpen) {
            var removePopup_1 = function (event) {
                var _a;
                // @ts-ignore
                if (!((_a = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                    setIsPopupOpen(false);
                }
            };
            // @ts-ignore
            document.addEventListener("mousedown", removePopup_1);
            return function () {
                // @ts-ignore
                document.removeEventListener("mousedown", removePopup_1);
            };
        }
    }, [isPopupOpen]);
    return (React.createElement("div", { style: containerStyle, className: "whole-container", ref: wrapperRef },
        React.createElement("div", { onClick: function (event) {
                if (onPopupTrigger) {
                    onPopupTrigger(!isPopupOpen, event);
                }
                setIsPopupOpen(!isPopupOpen);
            }, ref: triggerRef, className: "icon-container" }, popupTriggerer),
        React.createElement("div", { className: "popup-container " + (isPopupOpen ? "show-popup" : "hide-popup"), style: {
                left: position === "right"
                    ? triggerWidth / 2 - 15 + "px"
                    : "-" + (popupWidthInPx - triggerWidth / 2 - 15) + "px",
                maxHeight: popupMaxHeightInPx ? popupMaxHeightInPx + "px" : undefined,
            } },
            React.createElement("div", { className: "popup-arrow", style: __assign(__assign({}, arrowStyle), { left: position === "left"
                        ? popupWidthInPx - triggerWidth / 2 - 7.5 + "px"
                        : "7.5px" }) }),
            React.createElement("div", { className: "popup-content", style: __assign(__assign({}, popupStyle), { width: popupWidthInPx }) }, popupContent))));
}

export default IconPopup;
