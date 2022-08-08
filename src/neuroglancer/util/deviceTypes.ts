/**
 * 
 * @returns If the current browser in which neuroglancer is used is firefox or not.
 */
export function isFirefox(): boolean {
    return Object.prototype.hasOwnProperty.call(window, 'mozInnerScreenX');
}

/**
 * 
 * @returns If the current operating system in which neuroglancer is used is Mac or not.
 */
export function isMac(): boolean {
    return navigator.platform.indexOf('Mac')>=0;
}