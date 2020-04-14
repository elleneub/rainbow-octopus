import React from 'react';
import '../App.scss';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import Navbar from './Navbar';


class App extends React.Component {

    render() {
        return (
            <>
                <div className="App">
                        {/* <Navbar /> */}
                        <h1>Helper App</h1>
                        <ButtonPrimary />
                        <ButtonSecondary />
                </div>
            </>
        )
    }
}

export default App;
