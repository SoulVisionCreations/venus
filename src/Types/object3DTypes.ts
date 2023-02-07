import { MaterialProps } from '@react-three/fiber';
import { Euler, Vector3 } from 'three';
import { ObjectType } from 'typescript';
import { GeometryProps } from './types';

export type ObjectHtmlPropsType = {
  html: string;
  position: number[] | Vector3;
  price: number;
  rotation: number[] | Euler;
  scale: number;
  type: any;
};

export type standardObjectProps = {
  useInstancing?: boolean;
  type: ObjectType;
  color: string;
  geometry: GeometryProps;
  material: MaterialProps;
  objectHtmls?: ObjectHtmlPropsType[];
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  animations?: Array<Animation>;
};

export type gltfObjectProps = {
  assetId: string;
  type: ObjectType;
  objectHtmls?: ObjectHtmlPropsType[];
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
  type: ObjectType;
  animations?: Array<Animation>;
};

export type implicitObjectProps = {
  assetId: string;
  useInstancing?: boolean;
  type: ObjectType;
  objectHtmls?: ObjectHtmlPropsType[];
  position: number[] | Vector3;
  rotation?: number[] | Euler;
  scale?: number[] | Vector3;
  animations?: Array<Animation>;
};

export type Object3DProps = implicitObjectProps | text3DObjectProps | gltfObjectProps | standardObjectProps;
