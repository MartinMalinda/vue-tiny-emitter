import { TinyEmitter } from 'tiny-emitter';
import { onUnmounted } from 'vue';

export const emitter = new TinyEmitter();
export function useSubscribe(eventName: string, cb: () => void) {
  emitter.on(eventName, cb);
  onUnmounted(() => {
    emitter.off(eventName, cb)
  });
}

export const once = emitter.once.bind(emitter);
export const emit = emitter.emit.bind(emitter);
