export interface ItemType {
  id: string | undefined;
  title: string | undefined;
  content: string | undefined;
}
export interface LocationType {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key: string;
}
export interface RefObject<T> {
    readonly current: T | null;
}