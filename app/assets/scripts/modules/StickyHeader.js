import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lasyImage = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__subtitle');
    this.createHeaderWaypoint();

    this.pageSection = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lasyImage.on('load', () => {
      Waypoint.refreshAll();
    });
  }

  addSmothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: direction => {
        if (direction == 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const that = this;
    this.pageSection.each(function() {
      const currentPagesection = this;

      new Waypoint({
        element: currentPagesection,
        handler: direction => {
          if (direction == 'down') {
            const matchingHeaderLink = currentPagesection.getAttribute(
              'data-matching-link'
            );
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '20%'
      });

      new Waypoint({
        element: currentPagesection,
        handler: direction => {
          if (direction == 'up') {
            const matchingHeaderLink = currentPagesection.getAttribute(
              'data-matching-link'
            );
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader;
