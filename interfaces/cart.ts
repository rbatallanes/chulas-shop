import { Article, ArticlesSize, Colors, Gender, Images, Size, Stock } from "./";


export interface IProduct {
    id:             number;
    brand:          string;
    slug:           string;
    articles?:       Article;
    admissionDate:  Date;
    tags:           string;
    status:         number;
    quantity:       number;
}


export interface ICartArticle {
    id:             number;
    title:          string;
    articlesSizes:  ArticlesSize[];
    images:         Images[];
    stocks:         Stock[]; //VER
    description:    string;
    admissionDate:  Date;
    purchasePrice:  number;
    salePrice:      number;
    sizes?:         string; //Size;
    genders:        Gender;
    colors?:        number; //Colors;
    status:         number;
    quantity:       number;
}