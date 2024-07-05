import { CounterTwoTypes } from './CounterTwo.types';

export default function Counter(props: CounterTwoTypes) {
    const {count, handlerIncrement, handlerDecrement} = props;
    return (
        <>
            <h1>Counter two</h1>
            <p>{count}</p>
            {
                handlerIncrement && 
                <button onClick={()=>handlerIncrement()}>Increment</button>
            }
            {
                handlerDecrement && 
                <button onClick={()=>handlerDecrement()}>Decrement</button>
            }
        </>
    )
}
