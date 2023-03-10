import styled from'styled-components'
import { CSSTransition } from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.css'


    const images = {
        img1: 'http://www.pixelstalk.net/wp-content/uploads/2016/08/HD-Best-Nature-Wallpapers-For-Desktop.jpg',
        img2: 'http://stunningplaces.net/wp-content/uploads/2014/09/2.-Lost-and-forgotten-nature-has-grown-around-passing-trains.-Image-via-Distractify.jpg',
        img3: 'http://www.pixelstalk.net/wp-content/uploads/2016/08/Best-wallpaper-hd-nature-download.jpg',
    }



const Fade = styled(CSSTransition)`
    &.img-enter {
        opacity: 1;
        transition: opacity 5000ms;
    }

    &.img-enter-active {
        opacity: 1;
    }

    &.img-enter-done {
        opacity: 1;
    }


    &.img-exit {
        opacity:0;
        transition: opacity 2000ms;
    }

    &.img-exit-active {
        opacity: 0;
    }

    &.img-exit-done {
        opacity: 0;
    }
    

`
    
   
const Container = styled.div`
    display: flex;
    jsutify-content: center;
    
`

const Row = styled.div`
    flex-wrap: nowrap;
    width: 140.3vh;
    
`

const Image1 = styled.div`
    opacity:0;

    background: url(${images.img1});
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    height: 35rem;
    width: 25rem;
    margin: 40px auto;

`

const Image2 = styled.div`
    opacity:0;

    background: url(${images.img2}) no-repeat;
    background-size: cover; 
    background-position: center;

    display: flex;
    justify-content: center;
    height: 35rem;
    width: 25rem;
    margin: 40px auto;

`

const Image3 = styled.div`
    opacity:0;

    background: url(${images.img3});
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    height: 35rem;
    width: 25rem;
    margin: 40px auto;

`



const Images = (props) => {

    console.log(images.img2)
    

  return (
    <div>
      <Container className='container'>
        <Row className='row'>
            <Fade 
            in={props.firstPicture}
            classNames='img'
            timeout={5000}
            >
                <Image1 className='col-sm-4'>
                </Image1>
            </Fade>
            
            <Fade
            in={props.secondPicture}
            classNames='img'
            timeout={5000}
            >
                <Image2 className='col-sm-4'>
                </Image2>
            </Fade>
            
            <Fade
            in={props.thirdPicture}
            classNames='img'
            timeout={5000}
            >
                <Image3 className='col-sm-4'>
                </Image3>
            </Fade>
            
        </Row>
      </Container>
    </div>
  )
}

export default Images