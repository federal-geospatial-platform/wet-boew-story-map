define(["dojo/topic"], function(topic) {
    /*
     * Custom Javascript to be executed while the application is initializing goes here
     */
    var handleEnterKeyAsClick = function(evt) {
      if (evt.keyCode === 13) {
        $(this).trigger("click");
      }
    };
    // The application is ready
    topic.subscribe("tpl-ready", function() {
      /*
       * Custom Javascript to be executed when the application is ready goes here
       */
      // Make each text section able to reach focus programatically
      $("div.section").attr('tabIndex', -1);
      // Make the navigation dots keyboard accessible
      $(".navDotsUp,.navDotsDown,.dot")
        .attr('tabIndex', 0)
        .attr('role', 'button')
        .on('keydown', function(evt) {
          if (evt.keyCode === 13) {
            this.click();
            $(".section.active").focus();
          }
        });
      // Make the navigation dots have proper labels
      $(".navDotsUp,.navDotsDown,.dot").each(function() {
        var that = $(this);
        // If we set a title it shows up in addition to the fancy alt text
        // So we remove the title and let 'aria-label' handle screen readers
        that.removeAttr('title');
        that.attr('aria-label', that.attr('data-original-title'));
        if (that.hasClass('navDotsUp'))
          that.attr('title', i18n.viewer.customAgs.previousButton);
        else if (that.hasClass('navDotsDown'))
          that.attr('title', i18n.viewer.customAgs.nextButton);
      });
      // Add a link to the end of each section to move focus to the media container
      $("div.section > div.content").prepend(function(index) {
        var div = $("<div>", {
          id: "sideC-" + index,
          class: "skiptomain"
        });
        var anchorToMain = $("<a>", {
          href: "#mainC-" + index,
          tabindex: -1,
          text: i18n.viewer.customAgs.moveToDiv
        });
        div.append(anchorToMain);
        return div;
      });
      $("div.content > div.skiptomain").attr('tabIndex', 0).on('keydown', function(evt) {
        if (evt.keyCode === 13) {
          $(".mainMediaContainer.active div.skiptomain").focus();
        }
      });
      // Add a link to the beginning of each media container to move focus back to it's section
      $("div.mainMediaContainer").prepend(function(index) {
        var div = $("<div>", {
          id: "mainC-" + index,
          class: "skiptomain"
        });
        var anchorToSide = $("<a>", {
          href: "#sideC-" + index,
          tabindex: -1,
          text: i18n.viewer.customAgs.moveBackDiv
        });
        div.append(anchorToSide);
        return div;
      });
      $("div.mainMediaContainer > div.skiptomain").attr('tabIndex', 0).on('keydown', function(evt) {
        if (evt.keyCode === 13) {
          $(".section.active").focus();
        } else if (evt.shiftKey && evt.keyCode === 9) {
          // If they shift tab while on this element, move back as if they clicked it
          // Return false to consume the tab keydown 
          $(".section.active").focus();
          return false;
        }
      });
      // Remove the blue 'Down' arrow 
      $(".scrollInner").remove();
      // <p>,<ul>,<ol>,<h3> elements are given a tabindex by ESRI's code.  They shouldnt.
      $("div.content p,div.content ul,div.content ol,div.content h3").removeAttr('tabindex');
      // Titles for each section should be a <h2> for screen readers
      $(".sidePanel .section div.title").each(function() {
        this.innerHTML = "<h2>" + this.textContent + "</h2>";
      });
      // But the first one should be an <h1>
      $(".sidePanel .section:first-child div.title").each(function() {
        this.innerHTML = "<h1>" + this.textContent + "</h1>";
      });
      // Update the parent window's title, if we're in an iframe
      var titleText = $(".sidePanel .section:first-child div.title").text().trim();
      if(window.parent !== window) {
        $("title", window.parent.document).text(titleText);
      }
      // Remove the mobile version of the site
      // Screen readers can see it and will read out 
      $("#mobileView").attr('aria-hidden', 'true');
      $("#mobileView").attr('hidden', 'hidden');
  
    });
    // This event fires after a map is loaded in the media panel
    topic.subscribe("story-loaded-map", function(result) {
      // Make the zoom out/zoom in/home buttons keyboard accessible
      // Note that selecting .esriSimpleSliderIncrementButton selects Zoom in AND Home
      $(".esriSimpleSliderIncrementButton, .esriSimpleSliderDecrementButton")
        .attr('tabindex', 0)
        .attr('role', 'button');
      // This selects only the home button
      $(".esriSimpleSliderIncrementButton:has(div)").attr('title', i18n.viewer.customAgs.homeButton).on('keydown', handleEnterKeyAsClick);
      // The handleEnterKeyAsClick doesn't work in IE10 on specifically the +/- buttons.  So write the function by hand
      $(".esriSimpleSliderIncrementButton").has('span').on('keydown', function(evt) {
        if (evt.keyCode === 13) {
          app.map.setZoom(app.map.getZoom() + 1);
        }
      });
      $(".esriSimpleSliderDecrementButton").has('span').on('keydown', function(evt) {
        if (evt.keyCode === 13) {
          app.map.setZoom(app.map.getZoom() - 1);
        }
      });
      // Make the close keys on windows keyboard accessible
      $(".close")
        .attr('tabindex', 0)
        .attr('role', 'button')
        .attr('title', i18n.viewer.common.close)
        .on('keydown', handleEnterKeyAsClick);
      // Make the expand/contract icons on windows keyboard accessible
      $(".legendContainer .titleBtn")
        .attr('tabindex', 0)
        .attr('role', 'button')
        .attr('title', i18n.viewer.customAgs.toggleChevron)
        .on('keydown', handleEnterKeyAsClick);
      // Loading indicator needs alt text
      $(".loadingIndicator img").attr('alt', i18n.viewer.loading.step1);
      // Some images and icons get added without alt tags
      // This should fix them
      var updateLayerImagesWithAltTags = function() {
        $("image:not([alt])").attr('alt', '');
        $("img:not([alt])").attr('alt', '');
        console.log('updating alt tags');
      }
      // Run this once now, then again whenever the map loads
      // This catches things like if you pan into new icons/images
      updateLayerImagesWithAltTags();
      app.map.on('update-end', updateLayerImagesWithAltTags);
      // Remove images that have no 'src' - logoImg
      // causing issues on IE I think?  revisit this
      // $("img.logoImg").remove();
      // Set up keyboard navigation for the map
      $(".active .mapContainer.map").attr('tabindex', 0).on('keydown', function(evt) {
        // We only want to capture events on the map itself, not
        // any of the map's children.
        if (evt.target.classList && evt.target.classList.contains('mapContainer') === false) {
          return;
        }
        // shorthand for less typing
        var k = dojo.keys;
        switch (evt.keyCode) {
          // Handle up key
          case k.UP_ARROW:
          case k.NUMPAD_8:
            evt.preventDefault();
            app.map.panUp();
            break;
            // Handle down key
          case k.DOWN_ARROW:
          case k.NUMPAD_2:
            evt.preventDefault();
            app.map.panDown();
            break;
            // Handle left key
          case k.LEFT_ARROW:
          case k.NUMPAD_4:
            evt.preventDefault();
            app.map.panLeft();
            break;
            // Handle right key
          case k.RIGHT_ARROW:
          case k.NUMPAD_6:
            evt.preventDefault();
            app.map.panRight();
            break;
            // Handle zoom in key
          case k.NUMPAD_PLUS:
          case 187: // equals
          case 61: // equals on firefox
            evt.preventDefault();
            app.map.setZoom(app.map.getZoom() + 1);
            break;
            // Handle zoom out key
          case k.NUMPAD_MINUS:
          case 189: // minus
          case 173: // minus on firefox
            evt.preventDefault();
            app.map.setZoom(app.map.getZoom() - 1);
            break;
          default:
            // nothing to do - let the event propagate
        }
      });
      if (result.index !== null)
        console.log("The map", result.id, "has been loaded from the section", result.index);
      else
        console.log("The map", result.id, "has been loaded from a Main Stage Action");
    });
  });
  
  