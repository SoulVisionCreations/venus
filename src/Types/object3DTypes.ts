import { MaterialProps } from '@react-three/fiber';
import { Euler, Vector3 } from 'three';
import { ObjectTypes } from '../enums';
import { GeometryProps } from './types';

export type ObjectHtmlProps = {
  html: string;
  position: number[] | Vector3;
  price: number;
  rotation: number[] | Euler;
  scale: number;
  type: any;
};

export type standardObjectProps = {
  useInstancing?: boolean;
  type: ObjectTypes;
  color: string;
  geometry: GeometryProps;
  material: MaterialProps;
  objectHtmls?: ObjectHtmlProps[];
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  animations?: Array<Animation>;
};

export type gltfObjectProps = {
  assetId: string;
  type: ObjectTypes;
  objectHtmls?: ObjectHtmlProps[];
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  animations?: Array<Animation>;
};

export type text3DObjectProps = {
  assetId: string;
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  text: string;
  font: string;
  type: ObjectTypes;
  animations?: Array<Animation>;
  color: string;
};

export type implicitObjectProps = {
  assetId: string;
  useInstancing?: boolean;
  type: ObjectTypes;
  objectHtmls?: ObjectHtmlProps[];
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  animations?: Array<Animation>;
};

export type Object3DProps = implicitObjectProps | text3DObjectProps | gltfObjectProps | standardObjectProps;
