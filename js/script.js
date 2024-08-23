/* ==============JQ============ */

$(document).ready(function(){

  // color animation
  var state = true;
  $( "#button" ).on( "click", function() {
    if ( state ) {
      $( "#effect" ).animate({
        backgroundColor: "#aa0000",
        color: "#fff",
        width: 500
      }, 1000 );
    } else {
      $( "#effect" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 240
      }, 1000 );
    }
    state = !state;
  });
    
  // sortable
  $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");

  $( ".portlet-toggle" ).on( "click", function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });

    //  check box radio
    $( "input" ).checkboxradio();


    // spinner
    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();

 

    // tap
    $( "#tabs" ).tabs();

    // downloadprogressbar

         // run the currently selected effect
      function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });


    // progressbar
    $( "#progress" ).progressbar({
      value: 45
    });
    //  date piker

    $( "#datepicker" ).datepicker();

    // auto complete

    var data = [
       "html",
       "css",
       "javascript",
       "php",
       "wordpress"
    ];
    $( "#subject" ).autocomplete({
      source: data
    });

      
      // accordion

      $( "#accordion" ).accordion({
         collapsible: true
      });

    // selectable
    $( "#selectable" ).selectable();
    // resizable

    $('#resizable').resizable();

    // draggable
   $( "#draggable" ).draggable();

   //dragg and dropp
   $( "#dragg" ).draggable();
   $( "#dropp" ).droppable({
     drop: function( event, ui ) {
       $( this )
         .addClass( "ui-state-highlight" )
         .find( "p" )
           .html( "Dropped!" );
     }
   });


});