import { API_BASE_URL } from './client';

describe('api client', () => {
  it('exports empty API_BASE_URL by default', () => {
    expect(API_BASE_URL).toBe('');
  });
});
