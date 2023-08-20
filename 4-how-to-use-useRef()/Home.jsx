import React, { useContext, useRef, useState } from 'react';
import { AuthContest } from '../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContest)
    // console.log(user);
    // Examples of referencing a value with useRef
    const [start, setStart] = useState(false);
    const [now, setNow] = useState(false);
    const intervalRef = useRef(0)

    const handleStart = () => {
        setStart(Date.now())
        setNow(Date.now())
        // clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())

        }, 10)

    }
    const handleStop = () => {
        clearInterval(intervalRef.current)
    }
    let secondPass = 0;
    if (start != false && now != false) {
        secondPass = (now - start) / 1000

    }

    // Examples of manipulating the DOM with useRef

    // const [isPlaying, setIsPlaying] = useState(false);
    // const ref = useRef(null);

    // function handleClick() {
    //     // const nextIsPlaying = !isPlaying;
    //     setIsPlaying(true);

    //     if (!isPlaying) {
    //         ref.current.play();
    //     } else {
    //         ref.current.pause();
    //     }
    // }





    return (
        <div className='text-center'>
            <h2>This is Home {user && user.displayName} </h2>
            <h1>Time passed:{secondPass.toFixed(3)}</h1>
            <button onClick={handleStart} className='mr-4 bg-slate-300 px-4'>Start</button>
            <button onClick={handleStop} className='mr-4 bg-slate-300 px-4'>Stop</button>
            <br />
            {/* <button className='mr-4 bg-slate-300 px-4' onClick={handleClick}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <video
                width="250"
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video> */}

        </div>
    );
};

export default Home;