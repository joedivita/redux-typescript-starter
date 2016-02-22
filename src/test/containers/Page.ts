import { expect } from 'chai';
import * as React from 'react';
import { Page } from '../../app/js/containers/Page';
import ConnectedPage from '../../app/js/containers/Page';
import { MainLayout } from '../../app/js/components/MainLayout';
import { List } from 'immutable';
import * as $ from 'teaspoon';
import { spy } from 'sinon';
import * as ItemTypes from '../../app/js/modules/Items/constants';
import * as NotificationTypes from '../../app/js/modules/Notifications/constants';
import { NotificationType } from '../../app/js/modules/Notifications/definitions/notificationsDefinitions';
import { Provider } from 'react-redux';
import { IItemsState } from '../../app/js/modules/Items/definitions/itemsDefinitions';

let generateMockStore = (dispatch) => ({
  dispatch: dispatch,
  getReducer: spy(),
  getState: (): { itemsState: IItemsState } => ({
    itemsState: {
      error: { code: 0, message: '' },
      items: List<string>(['Foo', 'Bar']),
      loading: false,
    },
  }),
  replaceReducer: spy(),
  subscribe: spy(),
});

describe('Main Layout Component', () => {
  describe('#mapStateToProps', () => {
    it('properly maps itemsState properties', () => {
      // Arrange
      const dispatchSpy = spy();
      const mockProviderProps = { store: generateMockStore(dispatchSpy) };
      const provider = React.createElement(
        <any>Provider,
        mockProviderProps,
        React.createElement(ConnectedPage, {})
      );

      // Act
      const actual = $(provider).render().children()['0'].renderedElement.props;
      const expected = {
        dispatch: dispatchSpy,
        error: { code: 0, message: '' },
        items: List<string>(['Foo', 'Bar']),
        loading: false,
      };

      // Assert
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('#render', () => {
    let props = {
      dispatch: spy(),
      error: {
        code: 0,
        message: '',
      },
      items: List<string>(['Foo', 'Bar']),
      loading: true,
    };

    beforeEach(() => {
      props.dispatch = spy();
    });

    it('renders a MainLayout component', () => {
      // Arrange
      const element = React.createElement(Page, props);

      // Act
      const actual = $(element).render().children('MainLayout').length;
      const expected = 1;

      // Assert
      expect(actual).to.equal(expected);
    });

    it('passes the loading state into the MainLayout component', () => {
      // Arrange
      const parentElement = React.createElement(Page, props);
      const childElement = $(parentElement).render().children('MainLayout');

      // Act
      const actual = childElement['0'].props.loading;
      const expected = true;

      // Assert
      expect(actual).to.equal(expected);
    });

    it('passes the items into the MainLayout component', () => {
      // Arrange
      const parentElement = React.createElement(Page, props);
      const childElement = $(parentElement).render().children('MainLayout');

      // Act
      const actual = childElement['0'].props.items;
      const expected = List<string>(['Foo', 'Bar']);

      // Assert
      expect(actual).to.equal(expected);
    });

    it('passes the handleClick method into the MainLayout component', () => {
      // Arrange
      const handleClickSpy = spy();
      class PageStub extends Page {}
      PageStub.prototype.handleClick = handleClickSpy;
      const parentElement = React.createElement(PageStub, props);
      const childElement = $(parentElement).render().children('MainLayout');

      // Act
      childElement['0'].props.clickHeader();

      // Assert
      expect(handleClickSpy.calledOnce).to.equal(true);
    });
  });

  describe('#componentWillReceiveProps', () => {
    describe('if props.error is present', () => {
      it('emits an emitNotfication action', () => {
        // Arrange
        let props = {
          dispatch: spy(),
          error: {
            code: 0,
            message: '',
          },
          items: List<string>(['Foo', 'Bar']),
          loading: true,
        };
        const page = new Page(props);

        // Act
        props.error = { code: 400, message: 'An error occurred' };
        const expectedAction = {
          payload: {
            message: 'My error message',
            type: NotificationType.ERROR,
          },
          type: NotificationTypes.EMIT_NOTIFICATION,
        };
        page.componentWillReceiveProps(props);

        // Assert
        expect(props.dispatch.callCount).to.equal(1);
        expect(props.dispatch.firstCall.args[0]).to.deep.equal(expectedAction);
      });
    });

    describe('if props.error is NOT present', () => {
      it('does not emit an emitNotfication action', () => {
        // Arrange
        let props = {
          dispatch: spy(),
          error: {
            code: 0,
            message: '',
          },
          items: List<string>(['Foo', 'Bar']),
          loading: true,
        };
        const page = new Page(props);

        // Act
        page.componentWillReceiveProps(props);

        // Assert
        expect(props.dispatch.callCount).to.equal(0);
      });
    });
  });

  describe('#componentDidMount', () => {
    it('triggers the GET_ITEMS action', () => {
      // Arrange
      let props = {
        dispatch: spy(),
        error: {
          code: 0,
          message: '',
        },
        items: List<string>(['Foo', 'Bar']),
        loading: true,
      };
      const element = React.createElement(Page, props);

      // Act
      const expectedAction = {
        payload: { promise: {}},
        type: ItemTypes.GET_ITEMS,
      };
      $(element).render();

      // Assert
      expect(props.dispatch.calledOnce).to.be.true;
      expect(props.dispatch.firstCall.args[0]).to.deep.equal(expectedAction);
    });
  });

  describe('#handleClick', () => {
    it('triggers the ADD_ITEM action', () => {
      // Arrange
      const props = {
        dispatch: spy(),
        error: {
          code: 0,
          message: '',
        },
        items: List<string>(['Foo', 'Bar']),
        loading: true,
      };
      const page = new Page(props);

      // Act
      page.handleClick();

      // Assert
      expect(props.dispatch.callCount).to.equal(1);
    });
  });
});
