export type ToasterType = "success" | "error" | "warning" | "info";
  
export enum ToasterState {
    ongoing = "ongoing",
    finished = "finished",
}
  
export interface Toast {
    message: string,
    class: string,
    type: string,
    icon: string,
    state: string,
};
  
export interface ToasterList {
    type: string,
    class: string,
    icon: string
};
  
export interface ToastPayload {
    type: string,
    message: string,
    state: string,
};

export type ToasterPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';