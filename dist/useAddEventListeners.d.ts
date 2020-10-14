import { DependencyList, MutableRefObject } from 'react';
declare type ListenerOption = boolean | AddEventListenerOptions | undefined;
declare type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, ListenerOption?];
declare type Listeners<L extends (keyof WindowEventMap)[]> = {
    [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never;
};
export declare type MutableRef<T extends HTMLElement> = MutableRefObject<T | null> | ((instance: T | null) => void) | null;
interface OptProps<T extends HTMLElement> {
    dep: DependencyList;
    onRef: (node: T) => unknown;
}
declare const _default: <K extends ("abort" | "afterprint" | "beforeprint" | "beforeunload" | "blur" | "canplay" | "canplaythrough" | "change" | "click" | "compassneedscalibration" | "contextmenu" | "dblclick" | "devicelight" | "devicemotion" | "deviceorientation" | "deviceorientationabsolute" | "drag" | "dragend" | "dragenter" | "dragleave" | "dragover" | "dragstart" | "drop" | "durationchange" | "emptied" | "ended" | "error" | "focus" | "hashchange" | "input" | "invalid" | "keydown" | "keypress" | "keyup" | "load" | "loadeddata" | "loadedmetadata" | "loadstart" | "message" | "mousedown" | "mouseenter" | "mouseleave" | "mousemove" | "mouseout" | "mouseover" | "mouseup" | "mousewheel" | "MSGestureChange" | "MSGestureDoubleTap" | "MSGestureEnd" | "MSGestureHold" | "MSGestureStart" | "MSGestureTap" | "MSInertiaStart" | "MSPointerCancel" | "MSPointerDown" | "MSPointerEnter" | "MSPointerLeave" | "MSPointerMove" | "MSPointerOut" | "MSPointerOver" | "MSPointerUp" | "offline" | "online" | "orientationchange" | "pagehide" | "pageshow" | "pause" | "play" | "playing" | "popstate" | "progress" | "ratechange" | "readystatechange" | "reset" | "resize" | "scroll" | "seeked" | "seeking" | "select" | "stalled" | "storage" | "submit" | "suspend" | "timeupdate" | "unload" | "volumechange" | "vrdisplayactivate" | "vrdisplayblur" | "vrdisplayconnect" | "vrdisplaydeactivate" | "vrdisplaydisconnect" | "vrdisplayfocus" | "vrdisplaypointerrestricted" | "vrdisplaypointerunrestricted" | "vrdisplaypresentchange" | "waiting" | "animationcancel" | "animationend" | "animationiteration" | "animationstart" | "auxclick" | "cancel" | "close" | "cuechange" | "dragexit" | "focusin" | "focusout" | "gotpointercapture" | "lostpointercapture" | "pointercancel" | "pointerdown" | "pointerenter" | "pointerleave" | "pointermove" | "pointerout" | "pointerover" | "pointerup" | "securitypolicyviolation" | "selectionchange" | "selectstart" | "toggle" | "touchcancel" | "touchend" | "touchmove" | "touchstart" | "transitioncancel" | "transitionend" | "transitionrun" | "transitionstart" | "wheel" | "languagechange" | "messageerror" | "rejectionhandled" | "unhandledrejection")[], T extends HTMLElement>(listeners: Listeners<K>, { onRef, dep }?: Partial<OptProps<T>>) => {
    ref: (node: T) => void;
    refElement: MutableRefObject<T | null>;
};
export default _default;
