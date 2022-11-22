export interface Items {
    id:          number;
    name?:       string;
    categories?: Categories[];
    status:      number;
    createdAt:   Date;
    updatedAt:   Date;
    products?:   Product[];
    inStock?:    number;
}

export interface Categories {
    id:        number;
    name?:     string;
    products?: Product[];
    status:    number;
    createdAt: Date;
    updatedAt: Date;
    inStock?:  number;
}

export interface Product {
    id:            number;
    brand:         string;
    articles:      Article[];
    admissionDate: Date;
    tags:          string;
    status:        number;
    createdAt:     Date;
    updatedAt:     Date;
}


export interface Article {
    id:            number;
    title:         string;
    slug:          string;
    images:        Images[];
    stocks:        Stock[]; //VER
    description:   string;
    admissionDate: Date;
    purchasePrice: number;
    salePrice:     number;
    sizes:         Size;
    genders:       Gender;
    colors:        Colors;
    status:        number;
    createdAt:     Date;
    updatedAt:     Date;
}

export interface Images {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Stock {
    id:        number;
    inStock:   number;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Size {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Gender {
    id:        number;
    name:      string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Colors {
    id:        number;
    name:      string;
    code:      string;
    rgb:       string;
    status:    number;
    createdAt: Date;
    updatedAt: Date;
}
