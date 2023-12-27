import { Track } from "./ArquivoMp3";

export type AttributesCapa = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  url: string;
};
export type AttributesLivro = {
  title: string;
  slug: string;
  codigolivro: number;
  createdAt: string;
  updatedAt: string;
  capa: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
          thumbnail: AttributesCapa;
          small: AttributesCapa;
          medium: AttributesCapa;
          large: AttributesCapa;
        };
      };
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: any;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
  };
  arquivos: Track[];
};
export type Livro = {
  id: number;
  attributes: AttributesLivro;
};
