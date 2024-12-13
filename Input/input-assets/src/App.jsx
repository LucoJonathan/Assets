import './App.css'

function App () {

    return (<>


            <form id="register">
                <div id="row">
                    <label>
                        Input :
                        <input placeholder="Nom"/>
                    </label>
                    <label>
                        Input :
                        <input placeholder="Prenom"/>
                    </label>
                </div>
                <div id="row">
                    <label>
                        Input :
                        <input placeholder="Mail"/>
                    </label>
                    <label>
                        Input :
                        <input placeholder="Mail Confirm"/>
                    </label>
                </div>
                <div id="row">
                    <label>
                        Input :
                        <input placeholder="PassWord"/>
                    </label> <label>
                    Input :
                    <input placeholder="pwd Confirm"/>
                </label>
                </div>
                <div id="row">
                    <button>Button</button>
                </div>
            </form>
        </>)
}

export default App
