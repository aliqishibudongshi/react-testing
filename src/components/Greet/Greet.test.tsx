import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe("Greet", () => {
    test("renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    });
    describe("Nested", () => {
        test('renders with a name', () => {
            render(<Greet name='World' />);
            const textElement = screen.getByText('Hello World');
            expect(textElement).toBeInTheDocument();
        })
    })
})
