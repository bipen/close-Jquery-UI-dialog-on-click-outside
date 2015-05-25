//extend jQuery Dialog widget.
$.widget( "ui.dialog", $.ui.dialog, {
    // customize open method to register the click
    open: function() {
       var me = this;
       $(document).on('click',".ui-widget-overlay",function(e){
          //call dialog close function
          me.close();
       });

       // Invoke parent open method
       this._super();
    },
    close: function() {
        // Remove click handler for the current .ui-widget-overlay
        $(document).off("click",".ui-widget-overlay");
        // Invoke parent close method
        this._super(); 
    }
});