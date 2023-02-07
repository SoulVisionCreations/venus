import { useEffect } from 'react';
import { eventDrivenActionTypes } from '../../Types/types';
import { animationDefaults } from '../../Constants/defaults';

export const applyEventDrivenAnimations = (objectProps, time, objectRef, scrolledRotationValue) => {
  if (!objectProps.events) return;
  objectProps.events.forEach((event) => {
    switch (event.type) {
      case eventDrivenActionTypes.rotateByScrollOnce:
        objectRef.rotation.z = scrolledRotationValue.current;
        break;
      case eventDrivenActionTypes.rotateByScrollContinously:
        objectRef.rotation.z = scrolledRotationValue.current;
        break;
    }
  });
};

export const useEvents = (objectProps, sceneProps, scrolledRotationValue) => {
  const rotateByScrollOnce = (e) => {
    if (
      sceneProps.completelyVisible &&
      sceneProps.completelyVisibleCount <= 1 &&
      scrolledRotationValue.current < 2 * Math.PI &&
      scrolledRotationValue.current > -2 * Math.PI
    ) {
      scrolledRotationValue.current += animationDefaults.scrollByRotationOnceSpeed * (e.wheelDeltaY > 0 ? 1 : -1);
      document.body.style.overflow = 'hidden';
      if (scrolledRotationValue.current >= 2 * Math.PI || scrolledRotationValue.current <= -2 * Math.PI) {
        document.body.style.overflow = 'auto';
        sceneProps.setCompletelyVisibleCount((count) => count + 1);
      }
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const rotateByScrollContinously = (e) => {
    scrolledRotationValue.current += animationDefaults.scrollByRotationContinouslySpeed * (e.wheelDeltaY > 0 ? 1 : -1);
  };

  useEffect(() => {
    if (objectProps.events) {
      objectProps.events.forEach((event) => {
        switch (event.type) {
          case eventDrivenActionTypes.rotateByScrollOnce:
            if (sceneProps.completelyVisibleCount == 0) window.addEventListener('wheel', rotateByScrollOnce);
            break;
          case eventDrivenActionTypes.rotateByScrollContinously:
            window.addEventListener('wheel', rotateByScrollContinously);
            break;
        }
      });
    }
    return () => {
      if (objectProps.events) {
        objectProps.events.forEach((event) => {
          switch (event.type) {
            case eventDrivenActionTypes.rotateByScrollOnce:
              window.removeEventListener('wheel', rotateByScrollOnce);
              break;
            case eventDrivenActionTypes.rotateByScrollContinously:
              window.addEventListener('wheel', rotateByScrollContinously);
              break;
          }
        });
      }
    };
  }, [sceneProps.completelyVisible, sceneProps.completelyVisibleCount]);
};
