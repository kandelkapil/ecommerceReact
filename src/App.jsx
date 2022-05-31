import React from 'react'
import Products from './components/Products';
import datas from './data.json'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            products: datas.products,
            size: "",
            sort: "",
        }
    }

    render() {


        return (
            <div className="grid-container" >
                <header>
                    <a href="/">React Shopping Cart</a>
                </header>

                <main>
                    <div className="content">
                        <div className="main">
                            <Products product={this.state.products} />
                        </div>
                        <div className="sidebar">
                            Cart Items
                        </div>
                    </div>
                </main>
                <footer>
                    All right reserved
                </footer>
            </div>
        )
    }

}

export default App