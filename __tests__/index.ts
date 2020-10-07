import { defineComponent, createApp, h, nextTick } from 'vue';
import { once, emit, emitter, useSubscribe } from '../src/';

describe('emitter', () => {
  it('can be accessed', () => {
    expect(!!emitter).toBe(true);
    expect(!!emit).toBe(true);
    expect(!!once).toBe(true);
  });
});

describe('useSubscribe', () => {
  it('works in a component', async () => {
    let mockCb = jest.fn();
    createApp(defineComponent({
      setup() {
        useSubscribe('foo', mockCb);
        return () => h('div');
      }
    })).mount(document.body);

    emit('foo', 'bar');
    await nextTick(() => {
      expect(mockCb).toBeCalledWith('bar');
    });
  });
});
