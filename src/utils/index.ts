import { UserData, PaginatedData } from '../types';
import jsonData from '../mockData/data.json';
import { isEmpty } from 'lodash';

// Return data paginated with 10 items per page
export const getDataByPages = (users: UserData[]) => {
  if (isEmpty(users)) return [];

  const userPages: PaginatedData = {};
  const pageSize = 10;

  for (let i = 0; i < users.length / pageSize; i++) {
    const page = [];
    const start = i * pageSize;
    const end = (i + 1) * pageSize;
    for (let j = start; j < end; j++) {
      users[j] && page.push(users[j]);
    }
    userPages[i] = page;
  }

  return userPages;
}

// Pagination generated for testing purposes
export const getPaginatedMock = () => getDataByPages(jsonData.influencers);

// Convert 1000 to 1k method
export const intToString = (input: string | number) =>  {
  const num: any = input.toString().replace(/[^0-9.]/g, '');
  let idx;

  if (input < 1000) return num;

  let abbreviations = [
    {v: 1E3, s: "K"},
    {v: 1E6, s: "M"},
    {v: 1E9, s: "B"},
    {v: 1E12, s: "T"},
    {v: 1E15, s: "P"},
    {v: 1E18, s: "E"}
  ];
  
  for (idx = abbreviations.length - 1; idx > 0; idx--) {
    if (num >= abbreviations[idx].v) {
      break;
    }
  }

  return (num / abbreviations[idx].v)
  .toFixed(2)
  .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + abbreviations[idx].s;
}

export const getByFilteredStr = (users: UserData[], searchValue: string) => {
  if (isEmpty(users)) return [];

  return users.filter(({name, description}) => 
    name.includes(searchValue) || description.includes(searchValue)
  );
}