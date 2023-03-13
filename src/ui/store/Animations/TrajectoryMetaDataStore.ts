import { create } from 'zustand';
import { TrajectoryTypes } from '../../../types/enums';
import { TrajectoryMetaData } from '../../../types/trajectoryTypes';
import { unknownObject } from '../../../types/types';
import { initialTrajectoryMetaData } from './animationDefaults';

export type TrajectoryMetaDataActions = {
    setShow: (show: boolean) => void;
    setType: (type: TrajectoryTypes) => void;
    setClockwise: (clockwise: boolean) => void;
    setClosed: (closed: boolean) => void;
    setRotationZ: (rotationZ: number) => void;
    setCenter: (value: number, pos: string) => void;
    setRadius: (radius: number) => void;
    setWidth: (width: number) => void;
    setHeight: (height: number) => void;
    setSteps: (steps: number) => void;
    setRotateCurve: (rotateCurve: any) => void;
    setEquiSpacedPoints: (equiSpacedPoints: boolean) => void;
    setPoint: (value: number, pos: string) => void;
    addPoint: (point: []) => void;
    removePoint: (id: number) => void;
    setStartPoint: (value: number, pos: string) => void;
    setEndPoint: (value: number, pos: string) => void;
    resetPoint: () => void;
    resetAnimationTrajectory: () => void;
};

const InitialState: TrajectoryMetaData & unknownObject = {
    show: false,
    point: [0, 0, 0],
    ...initialTrajectoryMetaData,
};

const useTrajectoryMetaDataStore = create<TrajectoryMetaData & unknownObject & TrajectoryMetaDataActions>((set, get) => ({
    ...InitialState,
    setShow: (showAnimation) => set({ showAnimation }),
    setType: (type) => set({ type }),
    setClosed: (closed) => set({ closed }),
    setClockwise: (clockwise) => set({ clockwise }),
    setRotationZ: (rotationZ) => set({ rotationZ }),
    setCenter: (value, pos) => {
        if (pos === 'x') set((state) => ({ center: [value, (state.center as any)[1], (state.center as any)[2]] }));
        else if (pos === 'y') set((state) => ({ center: [(state.center as any)[0], value, (state.center as any)[2]] }));
        else if (pos === 'z') set((state) => ({ center: [(state.center as any)[0], (state.center as any)[1]], value }));
    },
    setRadius: (radius) => set({ radius }),
    setWidth: (width) => set({ width }),
    setHeight: (height) => set({ height }),
    setSteps: (steps) => set({ steps }),
    setRotateCurve: (rotateCurve) => set({ rotateCurve }),
    setEquiSpacedPoints: (equiSpacedPoints) => set({ equiSpacedPoints }),
    setPoint: (value, pos) => {
        if (pos === 'x') set((state) => ({ point: [value, (state.point as any)[1], (state.point as any)[2]] }));
        else if (pos === 'y') set((state) => ({ point: [(state.point as any)[0], value, (state.point as any)[2]] }));
        else if (pos === 'z') set((state) => ({ point: [(state.point as any)[0], (state.point as any)[1]], value }));
    },
    addPoint: (point) =>
        set((state) => ({
            points: [...state.points, point],
        })),
    removePoint: (id) => {
        const { points } = get();
        points.splice(id, 1);
        set({ points });
    },
    setStartPoint: (value, pos) => {
        if (pos === 'x') set((state) => ({ startPoint: [value, (state.startPoint as any)[1], (state.startPoint as any)[2]] }));
        else if (pos === 'y') set((state) => ({ startPoint: [(state.startPoint as any)[0], value, (state.startPoint as any)[2]] }));
        else if (pos === 'z') set((state) => ({ startPoint: [(state.startPoint as any)[0], (state.startPoint as any)[1]], value }));
    },
    setEndPoint: (value, pos) => {
        if (pos === 'x') set((state) => ({ endPoint: [value, (state.endPoint as any)[1], (state.endPoint as any)[2]] }));
        else if (pos === 'y') set((state) => ({ endPoint: [(state.endPoint as any)[0], value, (state.endPoint as any)[2]] }));
        else if (pos === 'z') set((state) => ({ endPoint: [(state.endPoint as any)[0], (state.endPoint as any)[1]], value }));
    },
    resetPoint: () => set({ point: [0, 0, 0] }),
    resetAnimationTrajectory: () => set(InitialState),
}));

const TrajectoryMetaDataStoreState = useTrajectoryMetaDataStore.getState;

export { TrajectoryMetaDataStoreState };

export default useTrajectoryMetaDataStore;
