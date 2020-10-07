import mitt from 'mitt';
import { onUnmounted } from 'vue';

export const emitter = mitt();
export function useSubscribe(eventName: string, cb: () => void) {
  emitter.on(eventName, cb);
  onUnmounted(() => emitter.off(eventName, cb));
}

export const emit = emitter.emit;
