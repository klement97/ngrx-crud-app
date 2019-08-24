import { reducer, initialState } from 'src/app/product/store/reducers/tini.reducer';

describe('Tini Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
