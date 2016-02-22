import { expect } from 'chai';
import reducer from '../../../../app/js/modules/Items/reducers/index';
import * as types from '../../../../app/js/modules/Items/constants';
import * as definitions from '../../../../app/js/modules/Items/constants';
import { List } from 'immutable';

describe('Items reducer', () => {
  it('returns the proper initial state', () => {
    const expectedState = {
      error: null,
      items: List<string>(),
      loading: false,
    };
    const initialState = reducer(undefined, { type: 'undefined' });
    expect(initialState).to.deep.equal(expectedState);
  });

  it('sets state for GET_ITEMS_FULFILLED', () => {
    const payload = {
      data: ['One', 'Two', 'Three'],
    };
    const expectedState = {
      error: null,
      items: List<string>(payload.data),
      loading: false,
    };
    const newState = reducer(undefined, {
      payload: payload,
      type: types.GET_ITEMS_FULFILLED,
    });
    expect(newState).to.deep.equal(expectedState);
  });

  it('sets state for GET_ITEMS_PENDING', () => {
    const list = ['One', 'Two', 'Three'];
    const initialState = {
      error: null,
      items: List<string>(list),
      loading: false,
    };
    const newState = reducer(initialState, {
      type: types.GET_ITEMS_PENDING,
    });
    const expectedState = {
      error: null,
      items: initialState.items,
      loading: true,
    };
    expect(newState).to.deep.equal(expectedState);
  });
});
