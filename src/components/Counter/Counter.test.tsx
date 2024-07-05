import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Counter from "./Counter"

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        // h1
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
        // button
        const incrementElement = screen.getByRole('button', {
            name: 'Increment',
        });
        expect(incrementElement).toBeInTheDocument();
    });

    test('renders a count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent("0");
    });

    test('renders a count of 1 after clicking the increment button', async () => {
        userEvent.setup();
        render(<Counter />);
        const incrementElement = screen.getByRole('button', {
            name: 'Increment',
        });
        await userEvent.click(incrementElement);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('1');
    });

    test('renders a count of 10 after clicking the set button', async () => {
        userEvent.setup();
        render(<Counter />);
        // 输入框
        const amountElement = screen.getByRole('spinbutton');
        await userEvent.type(amountElement, '10');
        expect(amountElement).toHaveValue(10);
        // set button
        const setElement = screen.getByRole('button', {
            name: 'Set'
        });
        await userEvent.click(setElement);
        // h1
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('10');
    });

    test('elements are focused from left to right', async () => {
        userEvent.setup();
        render(<Counter />);
        const amountElement = screen.getByRole('spinbutton');
        const setElement = screen.getByRole('button', {
            name: 'Set'
        });
        const incrementElement = screen.getByRole('button', {
            name: 'Increment',
        });
        await userEvent.tab();
        expect(incrementElement).toHaveFocus();
        await userEvent.tab();
        expect(amountElement).toHaveFocus();
        await userEvent.tab();
        expect(setElement).toHaveFocus();
    })
})