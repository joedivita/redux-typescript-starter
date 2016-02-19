import { expect } from 'chai';
import reducer from '../../../../app/js/modules/Items/reducers/index';
import * as types from '../../../../app/js/modules/Items/constants';
import * as definitions from '../../../../app/js/modules/Items/constants';
import { List } from 'immutable';

describe('Items reducer', () => {
  it('returns the proper initial state', () => {
    const expectedState = {
      items: List<string>(),
      loading: false,
      error: null
    };
    const initialState = reducer(undefined, { type: 'undefined' });
    expect(initialState).to.deep.equal(expectedState);
  });

  it('sets state for GET_ITEMS_FULFILLED', () =>{
    const payload = {
      data: ['One', 'Two', 'Three']
    };
    const expectedState = {
      items: List<string>(payload.data),
      loading: false,
      error: null
    };
    const newState = reducer(undefined, {
      type: types.GET_ITEMS_FULFILLED,
      payload: payload
    });
    expect(newState).to.deep.equal(expectedState);
  });

  it('sets state for GET_ITEMS_PENDING', () =>{
    const list = ['One', 'Two', 'Three'];
    const initialState = {
      items: List<string>(list),
      loading: false,
      error: null
    };
    const newState = reducer(initialState, {
      type: types.GET_ITEMS_PENDING
    });
    const expectedState = {
      items: initialState.items,
      loading: true,
      error: null
    }
    expect(newState).to.deep.equal(expectedState);
  });
});
