import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe('useCounter', ()=>{
    test('should render initalCount', ()=>{
        const {result} = renderHook(useCounter);
        expect(result.current.count).toBe(0);
    });

    test('should accept and render the same initalCount of 10', ()=>{
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        });
        expect(result.current.count).toBe(10);
    });

    test('should render the initalCount after increment', ()=>{
        const {result} = renderHook(useCounter);
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test('should render the initalCount after decrement', ()=>{
        const {result} = renderHook(useCounter);
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    });
})