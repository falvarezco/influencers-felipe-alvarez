// import { render, screen } from '@testing-library/react';
import {
  getDataByPages,
  intToString,
  getByFilteredStr,
  formatSocialsHandle,
  scrollTop,
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
    // By Name with Uppercase
    expect(getByFilteredStr(jsonData.influencers, 'Nikolaus')).toHaveLength(1);
    // By Name with Lowercase
    expect(getByFilteredStr(jsonData.influencers, 'nikolaus')).toHaveLength(1);
    // By Description with Uppercase
    expect(getByFilteredStr(jsonData.influencers, 'Sit ipsa quia dolor dignissimos id porro.')).toHaveLength(1);
    // By Description with Lowercase
    expect(getByFilteredStr(jsonData.influencers, 'sit ipsa quia dolor dignissimos id porro.')).toHaveLength(1);
  });

  test('Should format string to show social media name', () => {
    expect(formatSocialsHandle('Bob')).toBe('@Bob');
  });

  test('Should scroll to top when called', () => {
    window.scrollTo = jest.fn();
    scrollTop()
    expect(window.scrollTo).toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
