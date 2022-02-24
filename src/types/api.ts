export interface FilesType {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}

export interface SentType {
  subject: string;
  content: string;
  emails: string[];
}

export interface ApiReturnType {
  created_at: number;
  key: string | undefined;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files: FilesType[];
  sent?: SentType;
}
