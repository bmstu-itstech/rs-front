export interface DocInputModel {
    title: string;
    description: string;
    format: string;
    src: string;
};

export interface IDoc extends DocInputModel {
    id: string;
};
