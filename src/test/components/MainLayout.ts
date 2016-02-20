import { expect } from 'chai'
import * as React from 'react';
import { MainLayout } from '../../app/js/components/MainLayout';
import { List } from 'immutable';
import * as $ from 'teaspoon';
import { spy } from 'sinon';

let props = {
  clickHeader: spy(),
  items: List<string>(),
  loading: false
};

describe('Main Layout Component', function() {
  describe('Loading is false', () => {
    beforeEach(() => {
      props = {
        clickHeader: spy(),
        items: List<string>(['Foo', 'Bar', 'Baz']),
        loading: false
      };
    });

    it('has a header with the title "Items:"', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      const actual = $(element).render().find('h1').text();
      const expected = 'Items:';

      // Assert
      expect(actual).to.equal(expected);
    });

    it('shows a list of items', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      const listItems = $(element).render().find('ul li');
      const actual = listItems.map((li, index) => {
        return li.textContent;
      }).toArray();
      const expected = ['Foo', 'Bar', 'Baz'];

      // Assert
      expect(actual).to.deep.equal(expected);
    });
    it('clicking on the header triggers the clickHeader function', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      $(element).render().find('h1').trigger('click');

      // Assert
      expect(props.clickHeader.calledOnce).to.be.true;
    });
  });

  describe('Loading is true', () => {
    beforeEach(() => {
      props = {
        clickHeader: spy(),
        items: List<string>(['Foo', 'Bar', 'Baz']),
        loading: true
      };
    });

    it('Shows a loading indicator', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      const actual = $(element).render().find('h1').text();
      const expected = 'Loading...';

      // Assert
      expect(actual).to.equal(expected);
    });

    it('does not show a list of items', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      const listItems = $(element).render().find('ul li');
      const actual = listItems.length;
      const expected = 0;

      // Assert
      expect(actual).to.deep.equal(expected);
    });

    it('clicking on the header does nothing', () => {
      // Arrange
      const element = React.createElement(MainLayout, props);

      // Act
      $(element).render().find('h1').trigger('click');

      // Assert
      expect(props.clickHeader.callCount).to.equal(0);
    });
  });

});
