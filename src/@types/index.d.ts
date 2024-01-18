import React from "react";
// export all interfaces and types
declare module "nprogress";

export interface DashLayoutProps {
  children?: React.ReactNode;
}

export interface ToggleSide {
  toggleSidebar: boolean;
}

export interface ToggleSide2 {
  setToggleSidebar: () => void;
}

export interface title {
  reghead: string;
  type: number;
}

export interface SignInProps {
  username: string;
  password: string;
}

export interface RegistrationResponse {
  message: string;
  status: string;
  error: string;
}


export interface NewRegister {
  firstname: string;
  middlename: string;
  lastname: string;
  igHandle: string;
  gender: string;
  regNo: string;
  college: string;
  department: string;
  level: string;
  email: string;
  phoneNumber: string;
  roomNumber: string;
  dob: string;
  type: number;
}

export interface OldRegister {
  firstname: string;
  middlename: string;
  lastname: string;
  igHandle: string;
  gender: string;
  regNo: string;
  college: string;
  department: string;
  level: string;
  email: string;
  phoneNumber: number;
  roomNumber: string;
  dob: string;
  type: number;
}

export interface UserProfileProps {
  firstname: string;
  middlename: string;
  lastname: string;
  part: string;
  level: number;
}

// Modals
export interface FilterModalsProps {
  isOpen: boolean;
  onClose: () => void;
  // selection: string;
}
// context
export interface FilterContextProps {
  parts: string | null;
  setParts: (parts: string | null) => void;
  level: number | null;
  setLevel: (level: number | null) => void;
  subUnit: string | null;
  setSubUnit: (subUnit: string | null) => void;
  size: number;
  setSize: (size: number) => void;
  page: number;
  setPage: (page: number) => void;
  selection: string;
  setSelection: (selection: string) => void;
}

// Members
export interface Member {
  firstname: string;
  lastname: string;
  subunit: string;
  part: string;
  gender: string;
  roomno: string;
  User: {
    email: string;
  };
  department: string;
  level: string;
  phonenumber: string;
}

