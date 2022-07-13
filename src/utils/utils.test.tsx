// import { render, screen } from '@testing-library/react';
import {
  getDataByPages,
  intToString,
  getByFilteredStr,
  formatSocialsHandle,
} from '.';
import jsonData from '../mockData/data.json';

describe('Utils Methods', () => {
  test('Should return pagination array when calling getDataByPages', () => {
    const pagination = getDataByPages(jsonData.influencers);
    expect(Object.values(pagination)).toHaveLength(3);
    expect(Object.values(pagination[0])).toHaveLength(10);
  });

  test('Should formatt int numbers to thousands and millions when using intToString', () => {
    expect(intToString('1000')).toBe('1K');
    expect(intToString('1000000')).toBe('1M');
  });

  test('Should filter data collections when using getByFilteredStr', () => {
    // By Name
    expect(getByFilteredStr(jsonData.influencers, 'Nikolaus')).toHaveLength(1);
    // By Description
    expect(getByFilteredStr(jsonData.influencers, 'Sit ipsa quia dolor dignissimos id porro.')).toHaveLength(1);
  });

  test('Should format string to show social media name', () => {
    expect(formatSocialsHandle('Bob')).toBe('@Bob');
  });
});
