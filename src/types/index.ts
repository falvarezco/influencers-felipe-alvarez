export interface InitialState {
  isLoading: boolean,
  searchValue: string,
  currentPage: number,
  users: UserData[],
}

export interface Channel {
  handle: string,
  platform: string,
}

export interface UserData {
  audience: string | number,
  avatar: string,
  uuid?: string,
  channels: Channel[],
  description: string,
  location: string,
  name: string,
  reach: number,
  resonance: number,
  is_aligned: boolean,
}

export interface PaginatedData {
  [key: number]: UserData[],
}