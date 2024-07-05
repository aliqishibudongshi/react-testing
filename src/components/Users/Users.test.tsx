import { render, screen } from "@testing-library/react"
import { rest } from "msw"
import Users from "./Users"
import { server } from '../../mocks/server'

describe('Users', () => {
    test('renders correctly', () => {
        render(<Users />);
        const textElement = screen.getByText('Users');
        expect(textElement).toBeInTheDocument();
    });

    test('renders a list of users', async () => {
        render(<Users />);
        const userItem = await screen.findAllByRole('listitem');
        expect(userItem).toHaveLength(3);
    });

    test('renders error', async () => {
        // 模拟500 server
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(
                    ctx.status(500)
                )
            })
        );
        // render
        render(<Users />);
        // 获取到error元素
        const errorElement = await screen.findByText('error fetch users');
        expect(errorElement).toBeInTheDocument();
    });
})