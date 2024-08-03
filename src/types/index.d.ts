export interface Employee {
  _id?: string;
  name: string;
  email: string;
  address: {
    line1: string;
    city: string;
    zipCode: number;
    country: string;
  };
  phone_num: number;
}
