import { useEffect } from "react";
import { eventDrivenActionTypes } from "../../Configs/types";
import { animationDefaults } from "../../Constants/defaults";

export const applyEventDrivenActions = (props, time, objectRef, scrolledRotationValue) => {
    if(!props.events) return;
    props.events.forEach(event => {
        switch(event.type) {
            case eventDrivenActionTypes.rotateByScrollOnce :
                objectRef.rotation.z = scrolledRotationValue.current;
        }
    }
)};

export const useEvents = (props, scrolledRotationValue) => {

    const rotateByScrollOnce =  (e) => {
        if(props.completelyVisible && props.completelyVisibleCount <= 1 && (scrolledRotationValue.current < 2*Math.PI && scrolledRotationValue.current > -2*Math.PI)) {
            scrolledRotationValue.current += animationDefaults.scrollByRotationOnceSpeed*(e.wheelDeltaY > 0 ? 1 : -1);
            document.body.style.overflow = 'hidden';
            if(scrolledRotationValue.current >= 2*Math.PI || scrolledRotationValue.current <= -2*Math.PI) {
              document.body.style.overflow = 'auto';
              props.setCompletelyVisibleCount(count => count + 1);
            }
        } else {
          document.body.style.overflow = 'auto';
        }
    }

    useEffect(() => {
        if(props.events) {
          props.events.forEach(event => {
            switch(event.type) {
              case eventDrivenActionTypes.rotateByScrollOnce :
                if(props.completelyVisibleCount == 0) window.addEventListener("wheel", rotateByScrollOnce);
            }
          });
        }
        return () => {
          if(props.events) {
            props.events.forEach(event => {
              switch(event.type) {
                case eventDrivenActionTypes.rotateByScrollOnce :
                  window.removeEventListener("wheel", rotateByScrollOnce);
              }
            });
          }
        }
    }, [props.completelyVisible, props.completelyVisibleCount]);
}
