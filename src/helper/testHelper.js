import renderer from 'react-test-renderer';

export const AsyncTestRenderer = async elements => {
    /** Render, then allow the event loop to be flushed before returning */
    const wrapper = renderer.create(elements);

    return new Promise(resolve => {
        setTimeout(() => resolve(wrapper), 1);
    });
};