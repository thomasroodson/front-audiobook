export type Playlist = Track[];

export type Track = {
  id: number;
  titlemp3: string;
  descriptionmp3: string | null;
  midiamp3: TrackData;
};

export type TrackData = {
  data: {
    id: number;
    attributes: AttributesTrack;
  };
};

export type AttributesTrack = {
  name: string;
  alternativeText: string | null;
  caption: any;
  width: any;
  height: any;
  formats: any;
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
