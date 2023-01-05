import { ObjectControlTypes } from '../../Configs/types';
import Bouncy from './bouncy';

export const applyObjectControl = (objectControl, ObjRef, ObjProps) => {
    switch(objectControl.type) {
        case ObjectControlTypes.BouncyPresentation :
            return <Bouncy ObjRef={ObjRef} ObjProps={ObjProps} />
    }
}