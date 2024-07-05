import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe('Counter', () => {
    test('renders correctly', () => {
        render(<CounterTwo count={0} />);
        const textElement = screen.getByText('Counter two');
        expect(textElement).toBeInTheDocument();
    });

    test('handlers are called correctly', async () => {
        // user-event
        userEvent.setup();
        // 模拟函数
        const incrementHandler = jest.fn();
        const decrementHandler = jest.fn();
        render(
            <CounterTwo
                count={0}
                handlerDecrement={decrementHandler}
                handlerIncrement={incrementHandler}
            />
        );
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        });
        const decrementButton = screen.getByRole('button', {
            name: 'Decrement'
        });
        await userEvent.click(incrementButton);
        await userEvent.click(decrementButton);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})