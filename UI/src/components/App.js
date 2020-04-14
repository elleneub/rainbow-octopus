import React from 'react'
import logo from '../logo.svg'
import '../App.scss'
import ButtonPrimary from './ButtonPrimary'

class App extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <header className="App-header">
                        <h1>Hi</h1>
                        <ButtonPrimary />

                        <img src={logo} className="App-logo" alt="logo" />
                    </header>
                </div>
            </>
        )
    }
}

export default App
