import Square from './Components/Square';
import Input from './Components/Input';
import { useState } from 'react';

function App() {

    const [colorValue, setColorValue] = useState('')
    const [hexValue, setHexValue] = useState('')
    const [isDarkText, setIsDarkText] = useState(true)

    return(
        <div className="App">
            <h1>
                <Square 
                    colorValue={colorValue} 
                    hexValue={hexValue}
                    isDarkText={isDarkText}
                />
                <Input 
                    colorValue={colorValue} 
                    setColorValue={setColorValue}
                    setHexValue={setHexValue}
                    isDarkText={isDarkText}
                    setIsDarkText={setIsDarkText} 
                />   
            </h1>
        </div>
    )
}

export default App