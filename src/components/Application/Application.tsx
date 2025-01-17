export default function Application() {
    return (
        <>
            <h1>Job Application Form</h1>
            <h2>Section 1</h2>
            <p>All fields are mandatory</p>
            <span>All fields are mandatory</span>
            <span title='close'>X</span>
            <div data-testid='custom element'>custom element</div>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' placeholder="FullName"/>
                </div>
                <div>
                    <label htmlFor="job-application">Job Application</label>
                    <select id="job-application">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms" /> I agree to the terms and conditions
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
