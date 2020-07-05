import {useRef, useEffect} from 'react';

// Called after every render. Counts each call: the caller is mounted because we're called at each render;
export default function useRenderCount() {
    const renderCount = useRef(1)
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
        return (() => {
            console.warn(`cleanup after renderCount ${renderCount.current}`);
        });
    });
    return renderCount.current;
}
