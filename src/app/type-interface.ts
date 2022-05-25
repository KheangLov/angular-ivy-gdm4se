export interface ICategory {
  value: string;
  viewValue: string;
}

export interface IStatus {
  value: number;
  viewValue: string;
}

export interface IBook {
  id: number;
  title: string;
  category: string;
  is_active: boolean;
  createdAt: Date;
}
