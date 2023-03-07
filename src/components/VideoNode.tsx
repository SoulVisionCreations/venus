import { useEffect, useRef } from "react";
import { VideoNodeProps } from "../types/types";

export const VideoNode = (props: VideoNodeProps) => {
    const canvasRef = useRef<any>();
    const frames = useRef<Array<any>>([]);
    const ctx = useRef();
    const activeFrameIndex = useRef(-1);
    const animationFrameCallback = useRef<any>();

    async function getVideoTrack() {
        const video = document.createElement("video");
        video.crossOrigin = "anonymous";
        video.src = props.src;
        video.muted = true;
        await video.play();
        const [track] = video.captureStream().getVideoTracks();
        video.onended = () => track.stop();
        return track;
    }

    const renderFrame = () => {
        const frame = frames.current[activeFrameIndex.current];
        ctx.current.drawImage(frame, 0, 0);
    }

    const handleScroll = (e: any) => {
        if(e.deltaY > 0) {
            activeFrameIndex.current = Math.min(frames.current.length - 1, activeFrameIndex.current + 1);
        } else if(e.deltaY < 0) {
            activeFrameIndex.current = Math.max(0, activeFrameIndex.current - 1);
        }
        animationFrameCallback.current = requestAnimationFrame(renderFrame);
    }

    const renderFirstFrame = () => {
        const frame = frames.current[0];
        activeFrameIndex.current = 0;
        canvasRef.current.width = frame.width;
        canvasRef.current.height = frame.height;
        ctx.current?.drawImage(frame, 0, 0);
    };

    function readChunk(reader) {
        reader.read().then(async({ done, value }) => {
            if (value) {
                const bitmap = await createImageBitmap(value, {resizeHeight: window.innerHeight, resizeWidth: window.innerWidth, resizeQuality: 'high'});
                frames.current.push(bitmap);
                if(activeFrameIndex.current == -1) {
                    renderFirstFrame();
                    window.addEventListener('wheel', handleScroll);
                }
                value.close();
            }
            if (!done) {
                readChunk(reader);
            }
        });
    }

    const createFrames = async () => {
        if (window.MediaStreamTrackProcessor) {
            const track = await getVideoTrack();
            const processor = new MediaStreamTrackProcessor(track);
            const reader = processor.readable.getReader();
            readChunk(reader);
        } else {
            console.error("your browser doesn't support this API yet");
        }
    };
      
    useEffect(() => {
        setTimeout(() => {
            createFrames();
            ctx.current = canvasRef.current.getContext("2d");
        }, 0)
    }, []);

    return (
        <canvas ref={canvasRef}></canvas>
    )
}


// export const VideoNode = (props) => {
//     //const [count, setCount] = useState(0);
//     const videoRef = useRef<any>();
//     //const sRef = useRef<any>();
//     //const frameNumber = 0; // start video at frame 0
//     // lower numbers = faster playback
//     // const playbackConst = 1000;
//     // const scrollPlay = useCallback(() => {  
//     //     const frameNumber  = window.pageYOffset/playbackConst;
//     //     videoRef.current.currentTime  = frameNumber;
//     //     window.requestAnimationFrame(scrollPlay);
//     // }, []);
      
//     useEffect(() => {
//         document.body.style.overflow = 'hidden';
//         let forwardTimer: any = null;
//         let backwardTimer: any = null;
//         let animationFrame: any = null;
//         const interval = 100;
//         videoRef.current.addEventListener('wheel', function(e: any) {
//             if(e.deltaY < 0) {
//                 if(forwardTimer) clearTimeout(forwardTimer);
//                 // animationFrame = requestAnimationFrame(() => {
//                 //     videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime + e.deltaY*0.001);
//                 // })
//                 if(!backwardTimer) {
//                     backwardTimer = setTimeout(() => {
//                         videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - interval/1000);
//                         backwardTimer = null;
//                     }, interval);
//                 }
//             } else if(e.deltaY > 0) {
//                 //if(animationFrame) cancelAnimationFrame(animationFrame);
//                 if(backwardTimer) clearTimeout(backwardTimer);
//                 if(!forwardTimer) {
//                     forwardTimer = setTimeout(() => {
//                         videoRef.current.currentTime = Math.min(videoRef.current.duration, videoRef.current.currentTime + interval/1000);
//                         forwardTimer = null;
//                     }, interval);
//                 }
//             }
//        }, false)
//     }, []);

//     return (
//         <>
//             {/* <div ref={sRef} style={{display: 'block'}}></div> */}
//             <video ref={videoRef}>
//                 <source src={props.src} type="video/mp4" />
//             </video>
//         </>
//     )
// }