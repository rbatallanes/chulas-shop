import { Colors, Gender, Images, Size, Stock } from ".";

export interface ICartArticle {
    id:             number;
    title:          string;
    slug:           string;
    images:         Images[];
    stocks:         Stock[]; //VER
    description:    string;
    admissionDate:  Date;
    purchasePrice:  number;
    salePrice:      number;
    sizes:          Size;
    genders:        Gender;
    colors:         Colors;
    status:         number;
    createdAt:      Date;
    updatedAt:      Date;
    quantity:       number;
}