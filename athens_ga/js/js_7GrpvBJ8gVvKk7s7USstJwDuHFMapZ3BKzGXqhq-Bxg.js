(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;

var kwresearch = kwresearch || {};

(function ($, $$) {
	$.extend($$, {
		kwresearch_keyword_data: {},
		
		init: function() {
			$$.kwresearch_init();
		},
		
		kwresearch_init: function () {
		  var report_vocabs = Drupal.settings.kwresearch.tax_report_vocabs;
		  for(var vid in report_vocabs) {
			if (report_vocabs[vid] > 0 && ($('.kwresearch-refresh-link-' + vid).length == 0)) {
		      h = '<a href="#" class="kwresearch.kwresearch-refresh-link-' + vid + '" onclick="kwresearch.kwresearch_refresh_tax_report(\'' + vid + '\'); return false;" title="refresh report">';
		      h += '<img src="' + Drupal.settings.kwresearch.path_to_module + '/icons/refresh.png" alt="refresh report" />';
		      h += '</a>';
		      $('.kwresearch-tax-report-' + vid + ' label').append(h);
			}
		  } 
		  $$.kwresearch_process_keywords();
		},
		
		kwresearch_get_keyword_list: function(type) {
		  var value = '';
		  var keywords = new Array();
		  
		  if (type == 'vocab') {
		    if (Drupal.settings.kwresearch.keyword_tag_vocabulary) {    
		      if ($('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).val() != null) {
		        value = $('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).val();
		      } 
		    }    
		  }
		  else if (type == 'mlt') {
		    if ($('#edit-morelikethis-terms').val() != null) {
		      value = $('#edit-morelikethis-terms').val();  
		    }
		  }
		  else if (type == 'meta_keywords') {
		    if ($('#edit-nodewords-keywords-value').val() != null) {
		      value = $('#edit-nodewords-keywords-value').val();
		    }
		  }
		  
		  keywords = value.split(',');  
		  for(var i in keywords) {
		    keywords[i] = jQuery.trim(keywords[i].toLowerCase());
		  }
		  return keywords;
		},
		
		// Implementation of hook_contentanalysis_analysis_success
		kwresearch_contentanalysis_analysis_success: function(aid, data) {	
			$$.kwresearch_init();	
		},

		kwresearch_in_array: function(needle, haystack) {
			for(var i = 0; i < haystack.length; i++) {
				if (haystack[i] == needle) {
					return true;
				}
			}
			return false;
		},

		kwresearch_process_keywords: function() {
		//alert('hi');
		  $('.kwresearch_keyword:not(.processed)').each( function(index) {
		    keyword = $(this).text().toLowerCase();
		    str = $$.kwresearch_get_buttons(keyword);
		    
		    $(this).addClass('processed');
		    $(this).append(str);
		    $('.kwresearch_actions').hide();
		    $(this).mouseover( function() {
		      $(this).addClass('active');
		      var tools = $(this).find('.kwresearch_actions');
		      var pos = $(this).position(); 
		      var left = pos.left; 
		      var top = pos.top;
		      var topOffset = $(this).height();
		      var xTip = (left-0)+"px";  
		      //var yTip = (0-topOffset+top)+"px";  
		      var yTip = (0+top)+"px";  
		      tools.css({'top' : yTip, 'left' : xTip});  
		      tools.show();
		      
		    });
		    $(this).mouseout( function() {
		      var tools = $(this).find('.kwresearch_actions');
		      $(this).removeClass('active');
		      tools.hide();
		    });
		  });
		},

		kwresearch_get_buttons: function(keyword) {
		    str = '<div class="kwresearch_actions">';
		    title = Drupal.t('Keyword report');
		    str += '<a href="#" onclick="kwresearch.kwresearch_launch_report(\'' + keyword + '\'); return false;" title="' + title + '" class="kwresearch-tool-button">';
		    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/report.png" title="' + title + '" />';
		    str += '</a>';

		    str += $$.kwresearch_get_toggle_button(keyword, 'sitekw');
		    str += $$.kwresearch_get_toggle_button(keyword, 'siteops');
		    str += $$.kwresearch_get_toggle_button(keyword, 'pagekw');
		    str += $$.kwresearch_get_toggle_button(keyword, 'vocab');
		    str += $$.kwresearch_get_toggle_button(keyword, 'mlt');
		    str += $$.kwresearch_get_toggle_button(keyword, 'meta_keywords');

		    str += '</div>';
		    return str;
		},

		kwresearch_get_toggle_button: function(keyword, type) {
		  var str = '';
		  var keyword_list = $$.kwresearch_get_keyword_list(type);
		  if (type == 'sitekw') {  
		    if (Drupal.settings.kwresearch.enable_site_keyword_tool) { // TODO add admin permission logic
		      keywordns = keyword.replace(/ /g,'-');
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to targeted site keyword list');
		      var d = Drupal.settings.kwresearch.site_keywords_data;
		      var activei = -1;
		      if ((d[keyword] != null) && (d[keyword]['priority'] >= 0)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from targeted site keyword list');
		        activei = d[keyword]['priority'];
		      }
		      str += '<div onmouseover="kwresearch.kwresearch_display_tool_site_keyword_menu(this, 1);" onmouseout="kwresearch.kwresearch_display_tool_site_keyword_menu(this, 0);" class="kwresearch-tool-group kwresearch-tool-button kwresearch-tool-button-site-keyword-' + keywordns + '">'
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_sitekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\'); return false;" title="' + title + '" >';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/site_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';      

		      str += '<ul class="kwresearch-tool-menu kwresearch-tool-menu-site-priority-' + keyword + '" style="display: none; left: 0px; top: 18px;">';
		      op = Drupal.settings.kwresearch.site_priority_options;
		      for ( var i in op ) {
		        active = '';
		        if (activei == i) {
		          active = 'active';
		        }
		        str += '<li class="' + active + '"><a href="#" onclick="kwresearch.kwresearch_toggle_sitekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\', ' + i + '); return false;">' + op[i] + '</a></li>';
		      }
		      str += '</ul>';  
		      str += '</div>';      
		    }
		  }
		  if (type == 'siteops') {
			var d = Drupal.settings.kwresearch.site_keywords_data;
			if ((Drupal.settings.kwresearch.form != null) && (Drupal.settings.kwresearch.form.substr(0, 5) == 'admin')) {
				var link = Drupal.settings.kwresearch.keyword_edit_path + d[keyword]['kid'];
				if (Drupal.settings.kwresearch.return_destination) {
			  		link += '?destination=' + Drupal.settings.kwresearch.return_destination;
			  	}
			  	var title = Drupal.t('Edit keyword');
			    str += '<a href="' + link + '" onclick="kwresearch.kwresearch_edit_keyword(' + d[keyword]['kid'] + '); return false;" title="' + title + '" class="kwresearch-tool-button">';
			    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/keyword_edit.png" title="' + title + '" />';
			    str += '</a>';   	  
			}
		    if ((Drupal.settings.kwresearch.form != null) && (Drupal.settings.kwresearch.form == 'admin_keyword_list') && !(d[keyword]['page_count'] > 0)) {
		    	var title = Drupal.t('Delete keyword');
			    str += '<a href="#" onclick="kwresearch.kwresearch_delete_keyword(\'' + escape(keyword) + '\', ' + d[keyword]['kid'] + '); return false;" title="' + title + '" class="kwresearch-tool-button">';
			    str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/keyword_delete.png" title="' + title + '" />';
			    str += '</a>';   	  
		    }	  
		  }
		  if (type == 'pagekw') {  
		    if (Drupal.settings.kwresearch.enable_page_keyword_tool) { // TODO add admin permission logic
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to page keyword list');
		      var d = Drupal.settings.kwresearch.page_keywords_data;
		      var activei = 0;
		      if ((d[keyword] != null) && (d[keyword]['priority'] > 0)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from page keyword list');
		        activei = d[keyword]['priority'];
		      }
		      /*
		      str += '<a href="#" onclick="kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/page_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		      */      
		      str += '<div onmouseover="kwresearch.kwresearch_display_tool_page_keyword_menu(this, 1);" onmouseout="kwresearch.kwresearch_display_tool_page_keyword_menu(this, 0);" class="kwresearch-tool-group kwresearch-tool-button kwresearch-tool-button-page-keyword-' + keywordns + '">'
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\'); return false;" title="' + title + '" >';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/page_keyword_' + img + '.png" title="' + title + '" />';
		      str += '</a>';      

		      str += '<ul class="kwresearch-tool-menu kwresearch-tool-menu-site-priority-' + keyword + '" style="display: none; left: 18px; top: 18px;">';
		      op = Drupal.settings.kwresearch.page_priority_options;
		      for ( var i in op ) {
		        active = '';
		        if (activei == i) {
		          active = 'active';
		        }
		        str += '<li class="' + active + '"><a href="#" onclick="kwresearch.kwresearch_toggle_pagekw_keyword(\'' + keyword + '\', ' + add + ', \'' + keywordns + '\', ' + i + '); return false;">' + op[i] + '</a></li>';
		      }
		      str += '</ul>';    
		      str += '</div>';      
		      
		    }
		  }
		  else if (type == 'vocab') {
		    if (Drupal.settings.kwresearch.keyword_tag_vocabulary 
		      && ($('#edit-taxonomy-tags-' + Drupal.settings.kwresearch.keyword_tag_vocabulary).size() > 0)) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to keyword vocabulary');
		      
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from keyword vocabulary');
		      }
		      keyword
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_vocab_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/vocab_' + img + '.png" title="' + title + '" />';
		      str += '</a>';       
		    }
		  }
		  else if (type == 'mlt') {  
		    if ($('#edit-morelikethis-terms').size() > 0) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to More Like This');
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword from More Like This');
		      }
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_mlt_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/mlt_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		    }
		  }
		  else if (type == 'meta_keywords') {  
		    if ($('#edit-nodewords-keywords-value').size() > 0) {
		      add = 1;
		      img = 'add';
		      title = Drupal.t('Add keyword to meta keywords');
		      if ($$.kwresearch_in_array(keyword, keyword_list)) {
		        add = 0;
		        img = 'delete'
		        title = Drupal.t('Remove keyword to meta keywords');
		      }
		      str += '<a href="#" onclick="kwresearch.kwresearch_toggle_meta_keyword(\'' + keyword + '\', ' + add + ', this); return false;" title="' + title + '" class="kwresearch-tool-button">';
		      str += '<img src="' + Drupal.settings.kwresearch.module_path + '/icons/metakeywords_' + img + '.png" title="' + title + '" />';
		      str += '</a>';
		    }
		  }
		  return str
		},

		kwresearch_display_tool_site_keyword_menu: function(theDiv, state) {
		  if (state == 1) {
		    $(theDiv).children('ul').show();
		  }
		  else {
		    $(theDiv).children('ul').hide();
		  }
		},

		kwresearch_display_tool_page_keyword_menu: function(theDiv, state) {
		  if (state == 1) {
		    $(theDiv).children('ul').show();
		  }
		  else {
		    $(theDiv).children('ul').hide();
		  }
		},

		kwresearch_launch_report: function(keyword) {
		  if (Drupal.settings.kwresearch.form.substr(0,5) == 'admin') {
		    window.location = Drupal.settings.kwresearch.analyze_path + keyword;
		    return false;
		  }
		  //alert(keyword);
		  $('#edit-kwresearch-keyword').val(keyword);
		  contentanalysis.contentanalysis_show_analyzer_tab(document.getElementById('contentanalysis-analyzer-tab-kwresearch'));
		  $$.kwresearch_analyze();
		  return false;
		},

		kwresearch_toggle_sitekw_keyword: function(keyword, add, keywordns, priority) {
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'priority': -1,
		    'form': Drupal.settings.kwresearch.form
		  };
		  if (priority != null) {
		    data.priority = priority;
		    $('.kwresearch_actions').hide();
		  }
		  else if (add == 1) {
		    data.priority = 0;  
		  }  

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.toggle_site_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  var keyword = String(data.data['keyword']).toString();
		      if (Drupal.settings.kwresearch.site_keywords_data[keyword] == null) {
		        Drupal.settings.kwresearch.site_keywords_data[keyword] = {
		          'priority': data.data['priority']
		        }
		      }
		      else {
		        Drupal.settings.kwresearch.site_keywords_data[keyword]['priority'] = data.data['priority'];
		      }
		//alert(Drupal.settings.kwresearch.site_keywords_data[data.data['keyword']]['priority']);
		      $('.kwresearch-tool-button-site-keyword-' + keywordns).replaceWith($$.kwresearch_get_toggle_button(keyword, 'sitekw'));
		      //$(theLink).replaceWith(kwresearch_get_toggle_button(keyword, 'sitekw'));
		      if (Drupal.settings.kwresearch.form == 'admin_keyword_list') {
		    	$('#kid-' + data.data['kid']).hide();
		    	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");        
		        $('#kid-' + data.data['kid']).fadeIn(100);
		      }
		      if (Drupal.settings.kwresearch.form == 'admin_keyword_stats') {
		      	$('#kid-' + data.data['kid']).hide();
		      	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
		        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");
		        $('#kid-' + data.data['kid']).fadeIn(100);
		      }
		      if (Drupal.settings.kwresearch.form == 'node_edit') {
			    	$('#kid-' + data.data['kid']).hide();
			    	$('#kid-' + data.data['kid'] + ' .site_priority').replaceWith('<td class="site_priority">' + data.data['priority_out'] + "</td>");
			        $('#kid-' + data.data['kid'] + ' .value').replaceWith('<td class="value">' + data.data['value_out'] + "</td>");
			        $('#kid-' + data.data['kid'] + ' .user').replaceWith('<td class="user">' + data.data['user_out'] + "</td>");        
			        $('#kid-' + data.data['kid']).fadeIn(100);
			      }
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_edit_keyword: function(kid) {
			var loc = Drupal.settings.kwresearch.keyword_edit_path + kid;
			if (Drupal.settings.kwresearch.return_destination) {
			  loc += '?destination=' + Drupal.settings.kwresearch.return_destination;
			}
			window.location	= loc;
			return false;
		},

		kwresearch_delete_keyword: function(keyword, kid) {
		  keyword = unescape(keyword);
		  if (Drupal.settings.kwresearch.site_keywords_data[keyword]['priority'] > 0) {
			if (!confirm(Drupal.t('This keyword has a site priority. Are you sure you want to delete it?'))) {
				return false;
			}
		  }
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'kid': kid,
		    'form': Drupal.settings.kwresearch.form
		  };

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.delete_site_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  	if (data.data['deleted']) {
		// TODO this does not work with multiple deletes
		    	  $('#kid-' + data.data['kid']).fadeOut(100);
		    	  $('#kid-' + data.data['kid']).remove();
			  	}
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_toggle_pagekw_keyword: function(keyword, add, keywordns, priority) {
		  
		  // update sync vocabulary
		  v = $('#edit-fields-' + Drupal.settings.kwresearch.keyword_sync_vocabulary + '-und').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-fields-' + Drupal.settings.kwresearch.keyword_sync_vocabulary + '-und').val(nv);
		  
		  // do ajax call to store in database
		  var data = { 
		    'kwresearch_keyword': keyword,
		    'priority': 0,
		    'nid': Drupal.settings.contentanalysis.nid
		  };
		  if (priority != null) {
		    data.priority = priority;
		    $('.kwresearch_actions').hide();
		  }
		  else if (add) {    
		    data.priority = 50;  
		  } 

		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.toggle_page_keyword_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
		      if (Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']] == null) {
		        Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']] = {
		          'priority': data.data['priority']
		        }
		      }
		      else {
		        Drupal.settings.kwresearch.page_keywords_data[data.data['keyword']]['priority'] = data.data['priority'];
		      }
		      //$(theLink).replaceWith(kwresearch_get_toggle_button(keyword, 'pagekw'));
		      $('.kwresearch-tool-button-page-keyword-' + keywordns).replaceWith($$.kwresearch_get_toggle_button(data.data['keyword'], 'pagekw'));

		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {

		    }
		  });

		  return false;  
		},

		kwresearch_toggle_vocab_keyword: function(keyword, add, theLink) {
		  v = $('#edit-fields-' + Drupal.settings.kwresearch.keyword_sync_vocabulary + '-und').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-fields-' + Drupal.settings.kwresearch.keyword_sync_vocabulary + '-und').val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'vocab'));
		  return false;
		},

		kwresearch_toggle_mlt_keyword: function(keyword, add, theLink) {
		  v = $('#edit-morelikethis-terms').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-morelikethis-terms').val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'mlt'));
		  return false;
		},

		kwresearch_toggle_meta_keyword: function(keyword, add, theLink) {
		  v = $('#edit-metatags-keywords-value').val();
		  if (add) {    
		    nv = v + (v ? ', ' : '') + keyword;    
		  }
		  else {
		    nv = $$.kwresearch_remove_phrase_from_list(keyword, v);
		  }
		  $('#edit-metatags-keywords-value').val(nv);
		  $(theLink).replaceWith($$.kwresearch_get_toggle_button(keyword, 'meta_keywords'));
		  return false;
		},

		kwresearch_remove_phrase_from_list: function(keyword, list) {
		  kws0 = list.split(',');  
		  kws1 = new Array();
		  j = 0;
		  for(var i in kws0) {    
		    k = jQuery.trim(kws0[i].toLowerCase());
		    if (k != keyword) {
		      kws1[j] = k;
		      j++;
		    }    
		  }  
		  return kws1.join(', ');
		},

		kwresearch_analyze: function() {
		  // if TinyMCE is used, turn off and on to save body text to textarea

		  var data = { 
		    'kwresearch_keyword': '',
		    'kwresearch_include_misspellings': 0,
		    'kwresearch_include_plurals': 0,
		    'kwresearch_adult_filter':$('#edit-kwresearch-adult-filter:selected').val(),
		    'kwresearch_nid': -1
		  };
		  data.kwresearch_keyword = $('#edit-kwresearch-keyword').val();
		  if ($('#edit-kwresearch-include-misspellings:checked').val() != null) {
		    data.kwresearch_include_misspellings = 1;
		  }
		  if ($('#edit-kwresearch-include-plurals:checked').val() != null) {
		    data.kwresearch_include_plurals = 1;
		  }
		  if (Drupal.settings.contentanalysis.nid > 0) {
		    data.kwresearch_nid = Drupal.settings.contentanalysis.nid;
		  }
		  
		  $('.kwresearch-result-block').hide();
		  var id = 'kwresearch-result-block-' + data.kwresearch_keyword.replace(/ /g, '-').toLowerCase();
		  var existing = $('#' + id);
		  if (existing.size() > 0) {
		    $(existing).show();
		  } else {
		    $('#kwresearch-submit-button').after('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div><div class="message">' + Drupal.t('Analyzing...') + '</div></div>');
		    $('#kwresearch-submit-button').hide();  
		    $.ajax({
		      type: 'POST',
		      url: Drupal.settings.kwresearch.analyze_callback,
		      data: data,
		      dataType: 'json',
		      success: function(data, textStatus) {
		        $('#kwresearch-report').append(data.report['output']);
		        $$.kwresearch_init();
		        $('.ahah-progress-throbber').remove();
		        $('#kwresearch-submit-button').show();
		        //$$.kwresearch_keyword_data = $$.kwresearch_keyword_data.concat(data.report['data']);
		        //alert(pop(data.report['data']));
		      },
		      error: function(XMLHttpRequest, textStatus, errorThrown) {
		        //alert("error " + XMLHttpRequest.toString());
		        $('.ahah-progress-throbber').remove();
		        $('#kwresearch-submit-button').show();
		      }
		    });
		  }
		  return false;	
		},
		
		kwresearch_refresh_tax_report: function(vid) {
		  $('.kwresearch-refresh-link-' + vid).replaceWith('<div class="ahah-progress ahah-progress-throbber"><div class="throbber">&nbsp;</div></div>');
		  var data = { 
		    'keywords': $('#edit-taxonomy-tags-' + vid + '-wrapper input').val(),
		    'vid': vid,
		  };
		 
		  $.ajax({
		    type: 'POST',
		    url: Drupal.settings.kwresearch.tax_report_callback,
		    data: data,
		    dataType: 'json',
		    success: function(data, textStatus) {
			  vid = data.inputs['vid'];
			  $('#kwresearch-tax-report-'+vid).replaceWith(data.report['output']);
			  $('.ahah-progress-throbber').remove();
		      h = '<a href="#" class="kwresearch-refresh-link-' + vid + '" onclick="kwresearch.kwresearch_refresh_tax_report(\'' + vid + '\'); return false;" title="refresh report">';
		      h += '<img src="' + Drupal.settings.kwresearch.path_to_module + '/icons/refresh.png" alt="refresh report" />';
		      h += '</a>';
		      $('.kwresearch-tax-report-' + vid + ' label').append(h);      
		    },
		    error: function(XMLHttpRequest, textStatus, errorThrown) {
		      alert("error " + errorThrown.toString());
		      $('.ahah-progress-throbber').remove();
		      
		    }
		  });
		  return false;	
		}
	});	

	Drupal.behaviors.kwresearch_init = {
	  attach: function (context, settings) {
		$$.init();
	  }
	}

})(jQuery, kwresearch);

//Implementation of hook_contentanalysis_analysis_success
var kwresearch_contentanalysis_analysis_success = function(aid) {
  kwresearch.kwresearch_process_keywords();
};
(function ($) {

/**
 * Toggle the visibility of a fieldset using smooth animations.
 */
Drupal.toggleFieldset = function (fieldset) {
  var $fieldset = $(fieldset);
  if ($fieldset.is('.collapsed')) {
    var $content = $('> .fieldset-wrapper', fieldset).hide();
    $fieldset
      .removeClass('collapsed')
      .trigger({ type: 'collapsed', value: false })
      .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Hide'));
    $content.slideDown({
      duration: 'fast',
      easing: 'linear',
      complete: function () {
        Drupal.collapseScrollIntoView(fieldset);
        fieldset.animating = false;
      },
      step: function () {
        // Scroll the fieldset into view.
        Drupal.collapseScrollIntoView(fieldset);
      }
    });
  }
  else {
    $fieldset.trigger({ type: 'collapsed', value: true });
    $('> .fieldset-wrapper', fieldset).slideUp('fast', function () {
      $fieldset
        .addClass('collapsed')
        .find('> legend span.fieldset-legend-prefix').html(Drupal.t('Show'));
      fieldset.animating = false;
    });
  }
};

/**
 * Scroll a given fieldset into view as much as possible.
 */
Drupal.collapseScrollIntoView = function (node) {
  var h = document.documentElement.clientHeight || document.body.clientHeight || 0;
  var offset = document.documentElement.scrollTop || document.body.scrollTop || 0;
  var posY = $(node).offset().top;
  var fudge = 55;
  if (posY + node.offsetHeight + fudge > h + offset) {
    if (node.offsetHeight > h) {
      window.scrollTo(0, posY);
    }
    else {
      window.scrollTo(0, posY + node.offsetHeight - h + fudge);
    }
  }
};

Drupal.behaviors.collapse = {
  attach: function (context, settings) {
    $('fieldset.collapsible', context).once('collapse', function () {
      var $fieldset = $(this);
      // Expand fieldset if there are errors inside, or if it contains an
      // element that is targeted by the URI fragment identifier.
      var anchor = location.hash && location.hash != '#' ? ', ' + location.hash : '';
      if ($fieldset.find('.error' + anchor).length) {
        $fieldset.removeClass('collapsed');
      }

      var summary = $('<span class="summary"></span>');
      $fieldset.
        bind('summaryUpdated', function () {
          var text = $.trim($fieldset.drupalGetSummary());
          summary.html(text ? ' (' + text + ')' : '');
        })
        .trigger('summaryUpdated');

      // Turn the legend into a clickable link, but retain span.fieldset-legend
      // for CSS positioning.
      var $legend = $('> legend .fieldset-legend', this);

      $('<span class="fieldset-legend-prefix element-invisible"></span>')
        .append($fieldset.hasClass('collapsed') ? Drupal.t('Show') : Drupal.t('Hide'))
        .prependTo($legend)
        .after(' ');

      // .wrapInner() does not retain bound events.
      var $link = $('<a class="fieldset-title" href="#"></a>')
        .prepend($legend.contents())
        .appendTo($legend)
        .click(function () {
          var fieldset = $fieldset.get(0);
          // Don't animate multiple times.
          if (!fieldset.animating) {
            fieldset.animating = true;
            Drupal.toggleFieldset(fieldset);
          }
          return false;
        });

      $legend.append(summary);
    });
  }
};

})(jQuery);
;
(function($){
Drupal.behaviors.contextReactionBlock = {attach: function(context) {
  $('form.context-editor:not(.context-block-processed)')
    .addClass('context-block-processed')
    .each(function() {
      var id = $(this).attr('id');
      Drupal.contextBlockEditor = Drupal.contextBlockEditor || {};
      $(this).bind('init.pageEditor', function(event) {
        Drupal.contextBlockEditor[id] = new DrupalContextBlockEditor($(this));
      });
      $(this).bind('start.pageEditor', function(event, context) {
        // Fallback to first context if param is empty.
        if (!context) {
          context = $(this).data('defaultContext');
        }
        Drupal.contextBlockEditor[id].editStart($(this), context);
      });
      $(this).bind('end.pageEditor', function(event) {
        Drupal.contextBlockEditor[id].editFinish();
      });
    });

  //
  // Admin Form =======================================================
  //
  // ContextBlockForm: Init.
  $('#context-blockform:not(.processed)').each(function() {
    $(this).addClass('processed');
    Drupal.contextBlockForm = new DrupalContextBlockForm($(this));
    Drupal.contextBlockForm.setState();
  });

  // ContextBlockForm: Attach block removal handlers.
  // Lives in behaviors as it may be required for attachment to new DOM elements.
  $('#context-blockform a.remove:not(.processed)').each(function() {
    $(this).addClass('processed');
    $(this).click(function() {
      $(this).parents('tr').eq(0).remove();
      Drupal.contextBlockForm.setState();
      return false;
    });
  });

  // Conceal Section title, subtitle and class
  $('div.context-block-browser', context).nextAll('.form-item').hide();
}};

/**
 * Context block form. Default form for editing context block reactions.
 */
DrupalContextBlockForm = function(blockForm) {
  this.state = {};

  this.setState = function() {
    $('table.context-blockform-region', blockForm).each(function() {
      var region = $(this).attr('id').split('context-blockform-region-')[1];
      var blocks = [];
      $('tr', $(this)).each(function() {
        var bid = $(this).attr('id');
        var weight = $(this).find('select,input').first().val();
        blocks.push({'bid' : bid, 'weight' : weight});
      });
      Drupal.contextBlockForm.state[region] = blocks;
    });

    // Serialize here and set form element value.
    $('form input.context-blockform-state').val(JSON.stringify(this.state));

    // Hide enabled blocks from selector that are used
    $('table.context-blockform-region tr').each(function() {
      var bid = $(this).attr('id');
      $('div.context-blockform-selector input[value='+bid+']').parents('div.form-item').eq(0).hide();
    });
    // Show blocks in selector that are unused
    $('div.context-blockform-selector input').each(function() {
      var bid = $(this).val();
      if ($('table.context-blockform-region tr#'+bid).size() === 0) {
        $(this).parents('div.form-item').eq(0).show();
      }
    });

  };

  // make sure we update the state right before submits, this takes care of an
  // apparent race condition between saving the state and the weights getting set
  // by tabledrag
  $('#ctools-export-ui-edit-item-form').submit(function() { Drupal.contextBlockForm.setState(); });

  // Tabledrag
  // Add additional handlers to update our blocks.
  $.each(Drupal.settings.tableDrag, function(base) {
    var table = $('#' + base + ':not(.processed)', blockForm);
    if (table && table.is('.context-blockform-region')) {
      table.addClass('processed');
      table.bind('mouseup', function(event) {
        Drupal.contextBlockForm.setState();
        return;
      });
    }
  });

  // Add blocks to a region
  $('td.blocks a', blockForm).each(function() {
    $(this).click(function() {
      var region = $(this).attr('href').split('#')[1];
      var base = "context-blockform-region-"+ region;
      var selected = $("div.context-blockform-selector input:checked");
      if (selected.size() > 0) {
        var weight_warn = false;
        var min_weight_option = -10;
        var max_weight_option = 10;
        var max_observed_weight = min_weight_option - 1;
        $('table#' + base + ' tr').each(function() {
          var weight_input_val = $(this).find('select,input').first().val();
          if (+weight_input_val > +max_observed_weight) {
            max_observed_weight = weight_input_val;
          }
        });

        selected.each(function() {
          // create new block markup
          var block = document.createElement('tr');
          var text = $(this).parents('div.form-item').eq(0).hide().children('label').text();
          var select = '<div class="form-item form-type-select"><select class="tabledrag-hide form-select">';
          var i;
          weight_warn = true;
          var selected_weight = max_weight_option;
          if (max_weight_option >= (1 + +max_observed_weight)) {
            selected_weight = ++max_observed_weight;
            weight_warn = false;
          }

          for (i = min_weight_option; i <= max_weight_option; ++i) {
            select += '<option';
            if (i == selected_weight) {
              select += ' selected=selected';
            }
            select += '>' + i + '</option>';
          }
          select += '</select></div>';
          $(block).attr('id', $(this).attr('value')).addClass('draggable');
          $(block).html("<td>"+ text + "</td><td>" + select + "</td><td><a href='' class='remove'>X</a></td>");

          // add block item to region
          //TODO : Fix it so long blocks don't get stuck when added to top regions and dragged towards bottom regions
          Drupal.tableDrag[base].makeDraggable(block);
          $('table#'+base).append(block);
          if ($.cookie('Drupal.tableDrag.showWeight') == 1) {
            $('table#'+base).find('.tabledrag-hide').css('display', '');
            $('table#'+base).find('.tabledrag-handle').css('display', 'none');
          }
          else {
            $('table#'+base).find('.tabledrag-hide').css('display', 'none');
            $('table#'+base).find('.tabledrag-handle').css('display', '');
          }
          Drupal.attachBehaviors($('table#'+base));

          Drupal.contextBlockForm.setState();
          $(this).removeAttr('checked');
        });
        if (weight_warn) {
          alert(Drupal.t('Desired block weight exceeds available weight options, please check weights for blocks before saving'));
        }
      }
      return false;
    });
  });
};

/**
 * Context block editor. AHAH editor for live block reaction editing.
 */
DrupalContextBlockEditor = function(editor) {
  this.editor = editor;
  this.state = {};
  this.blocks = {};
  this.regions = {};

  return this;
};

DrupalContextBlockEditor.prototype = {
  initBlocks : function(blocks) {
    var self = this;
    this.blocks = blocks;
    blocks.each(function() {
      if($(this).hasClass('context-block-empty')) {
        $(this).removeClass('context-block-hidden');
      }
      $(this).addClass('draggable');
      $(this).prepend($('<a class="context-block-handle"></a>'));
      $(this).prepend($('<a class="context-block-remove"></a>').click(function() {
        $(this).parent ('.block').eq(0).fadeOut('medium', function() {
          $(this).remove();
          self.updateBlocks();
        });
        return false;
      }));
    });
  },
  initRegions : function(regions) {
    this.regions = regions;
    var ref = this;

    $(regions).not('.context-ui-processed')
      .each(function(index, el) {
        $('.context-ui-add-link', el).click(function(e){
          ref.showBlockBrowser($(this).parent());
        }).addClass('context-ui-processed');
      });
    $('.context-block-browser').hide();
  },
  showBlockBrowser : function(region) {
    var toggled = false;
    //figure out the id of the context
    var activeId = $('.context-editing', this.editor).attr('id').replace('-trigger', ''),
    context = $('#' + activeId)[0];

    this.browser = $('.context-block-browser', context).addClass('active');

    //add the filter element to the block browser
    if (!this.browser.has('input.filter').size()) {
      var parent = $('.block-browser-sidebar .filter', this.browser);
      var list = $('.blocks', this.browser);
      new Drupal.Filter (list, false, '.context-block-addable', parent);
    }
    //show a dialog for the blocks list
    this.browser.show().dialog({
      modal : true,
      close : function() {
        $(this).dialog('destroy');
        //reshow all the categories
        $('.category', this).show();
        $(this).hide().appendTo(context).removeClass('active');
      },
      height: (.8 * $(window).height()),
      minHeight:400,
      minWidth:680,
      width:680
    });

    //handle showing / hiding block items when a different category is selected
    $('.context-block-browser-categories', this.browser).change(function(e) {
      //if no category is selected we want to show all the items
      if ($(this).val() == 0) {
        $('.category', self.browser).show();
      } else {
        $('.category', self.browser).hide();
        $('.category-' + $(this).val(), self.browser).show();
      }
    });

    //if we already have the function for a different context, rebind it so we don't get dupes
    if(this.addToRegion) {
      $('.context-block-addable', this.browser).unbind('click.addToRegion')
    }

    //protected function for adding a clicked block to a region
    var self = this;
    this.addToRegion = function(e){
      var ui = {
        'item' : $(this).clone(),
        'sender' : $(region)
      };
      $(this).parents('.context-block-browser.active').dialog('close');
      $(region).after(ui.item);
      self.addBlock(e, ui, this.editor, activeId.replace('context-editable-', ''));
    };

    $('.context-block-addable', this.browser).bind('click.addToRegion', this.addToRegion);
  },
  // Update UI to match the current block states.
  updateBlocks : function() {
    var browser = $('div.context-block-browser');

    // For all enabled blocks, mark corresponding addables as having been added.
    $('.block, .admin-block').each(function() {
      var bid = $(this).attr('id').split('block-')[1]; // Ugh.
    });
    // For all hidden addables with no corresponding blocks, mark as addable.
    $('.context-block-item', browser).each(function() {
      var bid = $(this).attr('id').split('context-block-addable-')[1];
    });

    // Mark empty regions.
    $(this.regions).each(function() {
      if ($('.block:has(a.context-block)', this).size() > 0) {
        $(this).removeClass('context-block-region-empty');
      }
      else {
        $(this).addClass('context-block-region-empty');
      }
    });
  },
  // Live update a region
  updateRegion : function(event, ui, region, op) {
    switch (op) {
      case 'over':
        $(region).removeClass('context-block-region-empty');
        break;
      case 'out':
        if (
          // jQuery UI 1.8
          $('.draggable-placeholder', region).size() === 1 &&
          $('.block:has(a.context-block)', region).size() == 0
        ) {
          $(region).addClass('context-block-region-empty');
        }
        break;
    }
  },
  // Remove script elements while dragging & dropping.
  scriptFix : function(event, ui, editor, context) {
    if ($('script', ui.item)) {
      var placeholder = $(Drupal.settings.contextBlockEditor.scriptPlaceholder);
      var label = $('div.handle label', ui.item).text();
      placeholder.children('strong').html(label);
      $('script', ui.item).parent().empty().append(placeholder);
    }
  },
  // Add a block to a region through an AJAX load of the block contents.
  addBlock : function(event, ui, editor, context) {
    var self = this;
    if (ui.item.is('.context-block-addable')) {
      var bid = ui.item.attr('id').split('context-block-addable-')[1];

      // Construct query params for our AJAX block request.
      var params = Drupal.settings.contextBlockEditor.params;
      params.context_block = bid + ',' + context;
      if (!Drupal.settings.contextBlockEditor.block_tokens || !Drupal.settings.contextBlockEditor.block_tokens[bid]) {
        alert(Drupal.t('An error occurred trying to retrieve block content. Please contact a site administer.'));
        return;
     }
     params.context_token = Drupal.settings.contextBlockEditor.block_tokens[bid];

      // Replace item with loading block.
      //ui.sender.append(ui.item);

      var blockLoading = $('<div class="context-block-item context-block-loading"><span class="icon"></span></div>');
      ui.item.addClass('context-block-added');
      ui.item.after(blockLoading);


      $.getJSON(Drupal.settings.contextBlockEditor.path, params, function(data) {
        if (data.status) {
          var newBlock = $(data.block);
          if ($('script', newBlock)) {
            $('script', newBlock).remove();
          }
          blockLoading.fadeOut(function() {
            $(this).replaceWith(newBlock);
            self.initBlocks(newBlock);
            self.updateBlocks();
            Drupal.attachBehaviors(newBlock);
          });
        }
        else {
          blockLoading.fadeOut(function() { $(this).remove(); });
        }
      });
    }
    else if (ui.item.is(':has(a.context-block)')) {
      self.updateBlocks();
    }
  },
  // Update form hidden field with JSON representation of current block visibility states.
  setState : function() {
    var self = this;

    $(this.regions).each(function() {
      var region = $('.context-block-region', this).attr('id').split('context-block-region-')[1];
      var blocks = [];
      $('a.context-block', $(this)).each(function() {
        if ($(this).attr('class').indexOf('edit-') != -1) {
          var bid = $(this).attr('id').split('context-block-')[1];
          var context = $(this).attr('class').split('edit-')[1].split(' ')[0];
          context = context ? context : 0;
          var block = {'bid': bid, 'context': context};
          blocks.push(block);
        }
      });
      self.state[region] = blocks;
    });
    // Serialize here and set form element value.
    $('input.context-block-editor-state', this.editor).val(JSON.stringify(this.state));
  },
  //Disable text selection.
  disableTextSelect : function() {
    if ($.browser.safari) {
      $('.block:has(a.context-block):not(:has(input,textarea))').css('WebkitUserSelect','none');
    }
    else if ($.browser.mozilla) {
      $('.block:has(a.context-block):not(:has(input,textarea))').css('MozUserSelect','none');
    }
    else if ($.browser.msie) {
      $('.block:has(a.context-block):not(:has(input,textarea))').bind('selectstart.contextBlockEditor', function() { return false; });
    }
    else {
      $(this).bind('mousedown.contextBlockEditor', function() { return false; });
    }
  },
  //Enable text selection.
  enableTextSelect : function() {
    if ($.browser.safari) {
      $('*').css('WebkitUserSelect','');
    }
    else if ($.browser.mozilla) {
      $('*').css('MozUserSelect','');
    }
    else if ($.browser.msie) {
      $('*').unbind('selectstart.contextBlockEditor');
    }
    else {
      $(this).unbind('mousedown.contextBlockEditor');
    }
  },
  // Start editing. Attach handlers, begin draggable/sortables.
  editStart : function(editor, context) {
    var self = this;
    // This is redundant to the start handler found in context_ui.js.
    // However it's necessary that we trigger this class addition before
    // we call .sortable() as the empty regions need to be visible.
    $(document.body).addClass('context-editing');
    this.editor.addClass('context-editing');
    this.disableTextSelect();
    this.initBlocks($('.block:has(a.context-block.edit-'+context+')'));
    this.initRegions($('.context-block-region').parent());
    this.updateBlocks();

    $('a.context_ui_dialog-stop').hide();

    $('.editing-context-label').remove();
    var label = $('#context-editable-trigger-'+context+' .label').text();
    label = Drupal.t('Now Editing: ') + label;
    editor.parent().parent()
      .prepend('<div class="editing-context-label">'+ label + '</div>');

    // First pass, enable sortables on all regions.
    $(this.regions).each(function() {
      var region = $(this);
      var params = {
        revert: true,
        dropOnEmpty: true,
        placeholder: 'draggable-placeholder',
        forcePlaceholderSize: true,
        items: '> .block:has(a.context-block.editable)',
        handle: 'a.context-block-handle',
        start: function(event, ui) { self.scriptFix(event, ui, editor, context); },
        stop: function(event, ui) { self.addBlock(event, ui, editor, context); },
        receive: function(event, ui) { self.addBlock(event, ui, editor, context); },
        over: function(event, ui) { self.updateRegion(event, ui, region, 'over'); },
        out: function(event, ui) { self.updateRegion(event, ui, region, 'out'); },
        cursorAt: {left: 300, top: 0}
      };
      region.sortable(params);
    });

    // Second pass, hook up all regions via connectWith to each other.
    $(this.regions).each(function() {
      $(this).sortable('option', 'connectWith', ['.ui-sortable']);
    });

    // Terrible, terrible workaround for parentoffset issue in Safari.
    // The proper fix for this issue has been committed to jQuery UI, but was
    // not included in the 1.6 release. Therefore, we do a browser agent hack
    // to ensure that Safari users are covered by the offset fix found here:
    // http://dev.jqueryui.com/changeset/2073.
    if ($.ui.version === '1.6' && $.browser.safari) {
      $.browser.mozilla = true;
    }
  },
  // Finish editing. Remove handlers.
  editFinish : function() {
    this.editor.removeClass('context-editing');
    this.enableTextSelect();

    $('.editing-context-label').remove();

    // Remove UI elements.
    $(this.blocks).each(function() {
      $('a.context-block-handle, a.context-block-remove', this).remove();
      if($(this).hasClass('context-block-empty')) {
        $(this).addClass('context-block-hidden');
      }
      $(this).removeClass('draggable');
    });

    $('a.context_ui_dialog-stop').show();

    this.regions.sortable('destroy');

    this.setState();

    // Unhack the user agent.
    if ($.ui.version === '1.6' && $.browser.safari) {
      $.browser.mozilla = false;
    }
  }
}; //End of DrupalContextBlockEditor prototype

})(jQuery);
;

/**
 * JavaScript behaviors for the front-end display of webforms.
 */

(function ($) {

Drupal.behaviors.webform = Drupal.behaviors.webform || {};

Drupal.behaviors.webform.attach = function(context) {
  // Calendar datepicker behavior.
  Drupal.webform.datepicker(context);
};

Drupal.webform = Drupal.webform || {};

Drupal.webform.datepicker = function(context) {
  $('div.webform-datepicker').each(function() {
    var $webformDatepicker = $(this);
    var $calendar = $webformDatepicker.find('input.webform-calendar');
    var startDate = $calendar[0].className.replace(/.*webform-calendar-start-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var endDate = $calendar[0].className.replace(/.*webform-calendar-end-(\d{4}-\d{2}-\d{2}).*/, '$1').split('-');
    var firstDay = $calendar[0].className.replace(/.*webform-calendar-day-(\d).*/, '$1');
    // Convert date strings into actual Date objects.
    startDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
    endDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);

    // Ensure that start comes before end for datepicker.
    if (startDate > endDate) {
      var laterDate = startDate;
      startDate = endDate;
      endDate = laterDate;
    }

    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();

    // Set up the jQuery datepicker element.
    $calendar.datepicker({
      dateFormat: 'yy-mm-dd',
      yearRange: startYear + ':' + endYear,
      firstDay: parseInt(firstDay),
      minDate: startDate,
      maxDate: endDate,
      onSelect: function(dateText, inst) {
        var date = dateText.split('-');
        $webformDatepicker.find('select.year, input.year').val(+date[0]);
        $webformDatepicker.find('select.month').val(+date[1]);
        $webformDatepicker.find('select.day').val(+date[2]);
      },
      beforeShow: function(input, inst) {
        // Get the select list values.
        var year = $webformDatepicker.find('select.year, input.year').val();
        var month = $webformDatepicker.find('select.month').val();
        var day = $webformDatepicker.find('select.day').val();

        // If empty, default to the current year/month/day in the popup.
        var today = new Date();
        year = year ? year : today.getFullYear();
        month = month ? month : today.getMonth() + 1;
        day = day ? day : today.getDate();

        // Make sure that the default year fits in the available options.
        year = (year < startYear || year > endYear) ? startYear : year;

        // jQuery UI Datepicker will read the input field and base its date off
        // of that, even though in our case the input field is a button.
        $(input).val(year + '-' + month + '-' + day);
      }
    });

    // Prevent the calendar button from submitting the form.
    $calendar.click(function(event) {
      $(this).focus();
      event.preventDefault();
    });
  });
}

})(jQuery);
;
