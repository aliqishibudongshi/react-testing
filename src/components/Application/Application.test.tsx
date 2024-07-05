import { render, screen } from "@testing-library/react"
import Application from "./Application"

describe("Applications", () => {
    test("renders correctly", () => {
        render(<Application />)
        // h1
        const pageHeading = screen.getByRole("heading", {
            level: 1
        });
        expect(pageHeading).toBeInTheDocument();

        // h2
        const sectionHeading = screen.getByRole("heading", {
            level: 2
        });
        expect(sectionHeading).toBeInTheDocument();

        // p
        const paragraphElement = screen.getByText("All fields are mandatory", {
            selector: "p"
        });
        expect(paragraphElement).toBeInTheDocument();

        // span
        const spanElement = screen.getByText("All fields are mandatory", {
            selector: "span"
        });
        expect(spanElement).toBeInTheDocument();

        // span close
        const closeElement = screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        // custom div
        const customElement = screen.getByTestId('custom element');
        expect(customElement).toBeInTheDocument();

        // input:text
        const nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument();
        // 用placeholder筛选
        const nameElement2 = screen.getByPlaceholderText("FullName");
        expect(nameElement2).toBeInTheDocument();

        // select
        const jobApplicationElement = screen.getByRole('combobox');
        expect(jobApplicationElement).toBeInTheDocument();

        // input:checkbox
        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        // button
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });
})