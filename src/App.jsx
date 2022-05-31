import React from 'react'
import datas from './data.json'

class App extends React.Component() {

    render() {
        return (
            <div className="grid-container" >
                <header>
                    <a href="/">React Shopping Cart</a>
                </header>

                <main>
                    Product List
                </main>
                <footer>
                    All right reserved
                </footer>
            </div>
        )
    }

}

export default App