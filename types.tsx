export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
};

export type BottomTabParamList = {
  Login: undefined;
  Register: undefined;
};

export type LoginParamList = {
  LoginScreen: undefined;
};

export type RegisterParamList = {
  RegisterScreen: undefined;
};

export interface ILetter {
  id: string;
  name: string;
  img: string;
  letter: string;
}

export interface DropzoneProps {
  position: any;
  id: string;
  nr: number;
  handleSetPenalty: Function;
}

export interface DropzoneSmallProps {
  position: any;
  id: string;
  nr: number;
  handleSetPenalty: Function;
  letter: string;
}

export interface LetterProps {
  name: string;
  img: string;
  id: string;
  index: number;
}

export interface IPuzzle {
  id: number;
  name: string;
  letter: string;
  img: string;
}

export interface InitialPositionProps {
  start: Array<IPuzzle>;
  singleOne: Array<IPuzzle>;
  singleTwo: Array<IPuzzle>;
  singleThree: Array<IPuzzle>;
  singleFour: Array<IPuzzle>;
  singleFive: Array<IPuzzle>;
}

export interface IPuzzles extends Array<IPuzzle> {}

export interface UserObject {
  user: User;
  status: number;
  message: string;
  token: string;
  error: boolean;
}

export interface UserActionObject {
  user: User | null;
  status: number;
  message: string;
  token: string;
  error: boolean;
  loading: boolean;
}

export interface ErrorObject {
  status: number;
  message: string;
}

export interface ActionLoading {
  loading: boolean;
}

export interface User {
  createdAt: string;
  password: string;
  role: string;
  updatedAt: string;
  username: string;
  __v: number;
  _id: string;
}
