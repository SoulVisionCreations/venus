import { Scroll, ScrollControls} from '@react-three/drei';
import { AnimationTypes } from '../types';
import Bouncy from './bouncy';
import BouncyFloat from './bouncyFloat';
import Float from './Float';
import RotateByScroll from './rotateByScroll';

export const animateMesh = (mesh) => {
    switch(mesh.animationType) {
        case AnimationTypes.RotateByScroll:
            return (
            <ScrollControls>
                <Scroll>
                    <RotateByScroll mesh={mesh} />
                </Scroll>
            </ScrollControls>);
            break;
        case AnimationTypes.Float :  
            return (<Float mesh={mesh} />);
            break;
        case AnimationTypes.Bouncy :  
            return (<Bouncy mesh={mesh} />);
            break;
        case AnimationTypes.BouncyFloat :  
            return (<BouncyFloat mesh={mesh} />);
            break;
    }
}