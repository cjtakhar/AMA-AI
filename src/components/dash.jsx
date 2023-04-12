export default function Dash() {
    return (
        <div className="container-fluid">
            <div className="first-container">
            <h1 className="title">Hello.</h1>
                <form className="form-container">
                    <input className="text-container" type="text" />
                    <button type="button" className="btn">?</button>
                </form>
                <div className="answer-container">
                    <p className="answer"></p>
                </div>
            </div>
        </div>
    );
}