import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'

// ***************************************style
const colors = {
        navy_shadow: "rgba(2,12,27,0.7)",
        green: '#64ffda',
        green_tint:'rgba(100,255,218,0.1)',
        white: '#e6f1ff',
}



const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  width: 135.4vh;
  flex-wrap: nowrap;
`;

const ColSm = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 1px;
  width: 19vh;
  margin:15px auto
`;




// ***************************************


const Button = (props) => {

  

const ButtonChangeOne = styled.button`
  border-radius: 15px;
  padding: 5px;
  width: 8rem;
  background: ${colors.navy_shadow};
  color: ${colors.white};
  cursor: pointer;
  text-transform: uppercase;
  border: 2px solid ${colors.green_tint};
  ${props.firstPicture ? `border: 2px solid ${colors.green}` : `border: 2px solid ${colors.green_tint}` };

  &:hover {
    border: 2px solid ${colors.green};
    transition: border 500ms;
  }
`;

const ButtonChangeTwo = styled.button`
  border-radius: 15px;
  padding: 5px;
  width: 8rem;
  background: ${colors.navy_shadow};
  color: ${colors.white};
  cursor: pointer;
  text-transform: uppercase;
  border: 2px solid ${colors.green_tint};
  ${props.secondPicture ? `border: 2px solid ${colors.green}` : `border: 2px solid ${colors.green_tint}` };

  &:hover {
    border: 2px solid ${colors.green};
    transition: border 500ms;
  }
`;

const ButtonChangeThree = styled.button`
  border-radius: 15px;
  padding: 5px;
  width: 8rem;
  background: ${colors.navy_shadow};
  color: ${colors.white};
  cursor: pointer;
  text-transform: uppercase;
  border: 2px solid ${colors.green_tint};
  ${props.thirdPicture ? `border: 2px solid ${colors.green}` : `border: 2px solid ${colors.green_tint}` };

  &:hover {
    border: 2px solid ${colors.green};
    transition: border 500ms;
  }
`;



  return (
          
            
            <Container className='container'>
            <Row className='row'>


                <ColSm className='col-sm-4'>
                    <ButtonChangeOne className='btnChng' onClick={props.handleChangeA}>click</ButtonChangeOne>
                    </ColSm>
                    
    
                <ColSm className='col-sm-4'>
                    <ButtonChangeTwo className='btnChng' onClick={props.handleChangeB}>Click</ButtonChangeTwo>

                </ColSm>
                
                <ColSm className='col-sm-4'>
                  <ButtonChangeThree className='btnChng' onClick={props.handleChangeC}>Click</ButtonChangeThree>

                </ColSm>
                
                

            </Row>
            </Container>
            
    
  )
}

export default Button
