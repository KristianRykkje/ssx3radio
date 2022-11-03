export interface ISongInfo {
  currentTime: number;
  duration: number;
}

export interface ISong {
  name: string;
  id: string | number;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  color: string;
  metadata: {
    size: number;
    mimetype: string;
    cacheControl: string;
  };
  url: string;
  duration: number;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  year: number;
  trackUrl: {
    publicUrl: string;
  } | null;
  active: boolean;
}
