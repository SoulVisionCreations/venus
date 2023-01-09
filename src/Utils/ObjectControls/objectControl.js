import { ObjectControlTypes } from '../../Configs/types';
import Bouncy from './bouncy';

export const applyObjectControl = (objectControl, ObjRef, {...props}) => {
    switch(objectControl.type) {
        case ObjectControlTypes.BouncyPresentation :
            return <Bouncy ObjRef={ObjRef} {...props} />
    }
}