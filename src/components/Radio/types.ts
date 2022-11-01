export interface ISongInfo {
  currentTime: number;
  duration: number;
}

interface ISongExtra {
  active: boolean;
  color: string;
  cover: string;
  artist: string;
}

export interface ISong extends ISongExtra {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: {
    size: number;
    mimetype: "audio/mpeg";
    cacheControl: "max-age=3600";
  };
}
