let Ramtin = function() {

  let that = this;

  this.util = {

    loadingDone: function() {

      let loader = $('.loader-container').get(0);

      loader.style.opacity = 0;
      document.body.style.overflow = "auto";

      setTimeout(function(){

        loader.style.visibility = "hidden";

      } ,500);

    },

    isInView: function(element) {

      let rect = element.getBoundingClientRect();

      return (
          rect.top + rect.height / 2 >= 0 &&
          rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight)
      );

    },

    toggleSearch: function() {

      let bar = $('.search-bar').get(0);
      let input = $('.search-bar > input').get(0);
      let button = $('#nav-search').get(0);
      let icon = $('#nav-search > .nav-label > svg > g > path').get(0);

      if ( input.style.opacity === '0' ) {

        bar.style.height = '50px';
        input.style.pointerEvents = 'auto';
        input.style.opacity = '1';
        input.focus();
        button.style.backgroundColor = '#1b1b1b';
        icon.style.fill = '#4ae4ad';

      }
      else {

        bar.style.height = '0px';
        input.style.pointerEvents = 'none';
        input.style.opacity = '0';
        button.style.backgroundColor = '';
        icon.style.fill = '';

      }

    },

    animations: {

      grow: function(element, width, height) {

        if ( ! element.isActive && that.util.isInView(element) ) {

          element.style.height = height + 'px';
          element.style.width = width + 'px';
          element.isActive = true;

        }

      },

      fade: function(element) {

        if ( ! element.isActive && that.util.isInView(element) ) {

          element.style.opacity = 1;
          element.isActive = true;

        }

      }

    }

  };

  this.animations = {

    avatar: function() {

      that.util.animations.grow($('#avatar').get(0), 290, 290);
      that.util.animations.grow($('#avatar-border').get(0), 300, 300);

    },

    bio: function() {

      that.util.animations.fade($('.author-info').get(0));

    },

    logo: function() {

      that.util.animations.grow($('.blog-logo-large').get(0), 256, 256);

    }

  };

  window.addEventListener('load', that.util.loadingDone);
  window.addEventListener('load', that.animations.logo);
  window.addEventListener('load', that.animations.avatar);
  window.addEventListener('scroll', that.animations.avatar);
  window.addEventListener('load', that.animations.bio);
  window.addEventListener('scroll', that.animations.bio);

};

let ramtin = new Ramtin();
