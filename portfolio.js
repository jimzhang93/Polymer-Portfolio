    // custom transformation: scale header's title
    var titleStyle = document.querySelector('.title').style;
    addEventListener('core-header-transform', function(e) {
      var d = e.detail;
      var m = d.height - d.condensedHeight;
      var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
      titleStyle.transform = titleStyle.webkitTransform =
          'scale(' + scale + ') translateZ(0)';
    });

        function change() {
      var s = document.querySelector('select');
      document.querySelector('core-animated-pages').transitions = document.querySelector('select').options[s.selectedIndex].value;
    }

    function stuff(page) {
      var p = document.querySelector('core-animated-pages');
      p.selected = page;

    }
    function sendMessage(el) {
    el.show();
  }
    


    
      selectedProject: null,

      transition: function(e) {
        if (this.page === 0 && e.target.templateInstance.model.item) {
          this.selectedAlbum = e.target.templateInstance.model.item;
          this.page = 1;
        } else {
          this.page = 0;
        }
      }
    });

  