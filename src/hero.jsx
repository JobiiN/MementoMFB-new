import video from './assets/video.mp4'
import cbn from './assets/cbnlogo.png'
import ndic from './assets/ndicLogo.png'
import p1 from './assets/person1.avif'
import p2 from './assets/person2.avif'
import p3 from './assets/person3.avif'
function Hero() {

    return (
        <>
            <section className="hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                >
                    <source src={video} type="video/mp4" />
                </video>

                <div className="hero-overlay" />

                <div className="hero-content">

                    <div className="herodiv">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <strong className="heroh1">Banking for</strong>
                            <small className="heroh2">Bigger Dreams.</small>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <p>
                                Simple, secure and technology-driven
                                banking solutions designed to help individuals,
                                traders, salary earners and SMEs grow confidently.
                            </p>
                        </div>

                    </div>



                    <section className='hero-stats' data-aos="fade-up" data-aos-delay="300">
                        <div className='total-cust'>
                            <p>100+</p>
                            <span>Loans disbursed to individuals, traders and SMEs across Nigeria.</span>
                        </div>

                        <div className='licensed'>
                            <span>Licensed & Protected</span>
                            <img className="cbnLogo" src={cbn} />
                            <img className="ndicLogo" src={ndic} />
                        </div>

                        <div className='disbursed'>
                            <div className='disbursed-title'>
                                <div className='disbursed-pics'>
                                    <img className="sPeople" src={p1} />
                                    <img className="sPeople" src={p2} />
                                    <img className="sPeople" src={p3} />
                                </div>
                                <p>2000+</p>
                            </div>
                            <span>Customers have accessed our banking services and growing daily.</span>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
};

export default Hero