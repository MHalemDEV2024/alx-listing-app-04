// File: interfaces/index.ts
export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  images?: string[];
  discount: string;
  description: string;
  reviews?: Review[];
}


export interface PillProps {
  title: string;
}
export interface ButtonProps {
  title: string;
  styles: string; 
}

export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}