import Typing from 'react-typing-animation';
import './typing-home.css'

const AnimatedTypingHome = () => (
    <div className='typing-home'>
    <Typing startDelay={500} speed={100}>
        <Typing.Speed ms={30} />
        <span><span className='console'>>>></span>Welcome.dev</span>
        <Typing.Speed ms={0} />
        <p className='loading'>Loading...</p>
        <Typing.Reset count={1} delay={1500} />
        <Typing.Speed ms={30} />
        <Typing.Delay ms={200} />
        <p className='hello'>Hello I am...</p>
        <h1 className='name'>Marcin Bednarz</h1>
        <h2 className='web-dev'>Web Developer</h2>
    </Typing>
    </div>
);

export default AnimatedTypingHome