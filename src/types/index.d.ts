export interface Employee {
  _id?: string;
  name: string;
  email: string;
  address: {
    line1: string;
    city: string;
    zipCode: string;
    country: string;
  };
  phone_num: string;
}
