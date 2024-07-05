import { render, screen } from "@testing-library/react"
import Skills from "./Skills"

describe('Skills', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];
    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElement = screen.getAllByRole('listitem');
        expect(listItemElement).toHaveLength(skills.length);
    });

    test('renders login button', () => {
        render(<Skills skills={skills} />);
        const loginButtonElement = screen.getByRole('button', {
            name: 'login',
        });
        expect(loginButtonElement).toBeInTheDocument();
    });

    test('start learning button is not rendered', () => {
        render(<Skills skills={skills} />);
        const startLearningButtonElement = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(startLearningButtonElement).not.toBeInTheDocument();
    });


    test('start learning button is eventually displayed', async () => {
        render(<Skills skills={skills} />);
        const startLearningButtonElement = await screen.findByRole('button', {
            name: 'Start learning'
        }, { timeout: 5000 });
        expect(startLearningButtonElement).toBeInTheDocument();

    })
})