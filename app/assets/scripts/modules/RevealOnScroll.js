import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(element, offset) {
    this.element = element;
    this.offset = offset;

    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.element.addClass('reveal-item');
  }

  createWaypoints() {
    const that = this;

    this.element.each(function() {
      const currentItem = this; // deals with individual element
      new Waypoint({
        element: currentItem,
        handler: direction => {
          if (direction == 'down') {
            $(currentItem).addClass('reveal-item--is-visible');
          } else {
            $(currentItem).removeClass('reveal-item--is-visible');
          }
        },
        offset: that.offset
      });
    });
  }
}

export default RevealOnScroll;
