import EventBus from "./EventBus";
import { ToasterState } from "./toaster.types";
import type { ToasterType } from "./toaster.types";

const customToast = (message: string, options?: {type?: ToasterType, duration?: number}) => {
  EventBus.emit('openToast', {
    type: options?.type || 'info',
    message,
    state: ToasterState.finished,
  });
  setTimeout(() => {
    EventBus.emit('closeToast')
  }, options?.duration || 4000);
};

export const APIToast = (operation: Promise<any>, success: string, options?: {progress?: string, error?: string, duration?: number}) => {
  EventBus.emit('openToast', {
    type: 'info',
    message: options?.progress || 'Loading',
    state: ToasterState.ongoing,
  });
  return new Promise((resolve, reject) => {
    operation
      .then((value) => {
        EventBus.emit('openToast', {
          type: 'success',
          message: success,
          state: ToasterState.finished,
        });
        resolve(value);
        setTimeout(() => {
          EventBus.emit('closeToast');
        }, options?.duration || 4000);
      }).catch ((error) =>{
        EventBus.emit('openToast', {
          type: 'error',
          message: options?.error || "An error occurred",
          state: ToasterState.finished,
        });
        reject(error);
        setTimeout(() => {
          EventBus.emit('closeToast');
        }, options?.duration || 4000);
      });
  });
};

export const toast = {
  success: (message: string, options?: {duration?: number}) => {
    customToast(message, {type: 'success', duration: options?.duration});
  },
  error: (message: string, options?: {duration?: number}) => {
    customToast(message, {type: 'error', duration: options?.duration});
  },
  warning: (message: string, options?: {duration?: number}) => {
    customToast(message, {type: 'warning', duration: options?.duration});
  },
  info: (message: string, options?: {duration?: number}) => {
    customToast(message, {type: 'info', duration: options?.duration});
  }
}