
function Errormsg(props) {

    return (
        <div>
            <div>
                <h2>Invalid Input</h2>
            </div>
            <div>
                <p>Input values acnnot be empty</p>
            </div>
            <div>
                <button onClick={props.onConfirm}>Ok</button>
            </div>
        </div>
    )
}

export default Errormsg