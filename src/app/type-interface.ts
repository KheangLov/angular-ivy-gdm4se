export interface ICategory {
  value: string;
  viewValue: string;
}

export interface IStatus {
  value: number;
  viewValue: string;
}

export interface IBook {
  id: any;
  title: any;
  category: any;
  is_active: any;
  createdAt: any;
}

export interface IBookForm {
  title: string;
  category: string;
  is_active: boolean;
}
