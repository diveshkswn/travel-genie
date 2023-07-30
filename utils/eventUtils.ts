/* eslint-disable @typescript-eslint/no-explicit-any */


/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const eventUtil = {
  on(event: any, callback: (data: any) => void) {
    document.addEventListener(event, e => callback(e.detail));
  },
  dispatch(event: any, data: any) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  remove(event: any, callback: () => void) {
    document.removeEventListener(event, callback);
  },
};
