import { useState } from "react"
import Images from './components/Images'
import Button from './components/Button'

const App = () => {

  const [firstPicture, setFirstPicture] = useState(false);
  const [secondPicture, setSecondPicture] = useState(false);
  const [thirPicture, setThirdPicture] = useState(false)

  const handleChangeA = ()=> {
    setFirstPicture((v) => !v)
  }

  const handleChangeB = ()=> {
    setSecondPicture((v) => !v)
  }

  const handleChangeC = ()=> {
    setThirdPicture((v) => !v)
  }
  
  
  return (
    <div>
      <Button 
        handleChangeA={handleChangeA}
          handleChangeB={handleChangeB}
            handleChangeC={handleChangeC} 

        firstPicture={firstPicture}
          secondPicture={secondPicture}
            thirdPicture={thirPicture}   
      />

      <Images
        firstPicture={firstPicture}
          secondPicture={secondPicture}
            thirdPicture={thirPicture}
      />
    </div>
  )
}

export default App