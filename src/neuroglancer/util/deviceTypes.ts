export function isFirefox(): boolean {
    return Object.prototype.hasOwnProperty.call(window, 'mozInnerScreenX');
}

export function isMac(): boolean {
    return navigator.platform.indexOf('Mac')>=0;
}