export interface InitialState {
  isLoading: boolean,
  currentPage: number,
  users: UserData[],
}

export interface Channel {
  handle: string,
  platform: string,
}

export interface UserData {
  audience: string,
  avatar: string,
  uuid: string,
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