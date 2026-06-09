import { Player } from '@lottiefiles/react-lottie-player'
import animationData from './assets/animation.json'


function jsun() {
    return (
        < section className="jsun-section">
            <div className='jsun-header'>
                <h2 className='jsun-big-title'>Banking for, <span className='jsun-invertbigtitle'> Bigger Dreams.</span></h2>
            </div>


            <Player
                autoplay
                loop
                src={animationData}
                style={{ maxHeight: '350px', maxWidth: '700px' }}
            />
        </section>
    )
}

export default jsun