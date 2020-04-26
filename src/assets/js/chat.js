const chatbox = jQuery.noConflict();
var $=jQuery.noConflict();

chatbox(() => {
	  chatbox(".chatbox-open").click(() =>
	    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
	  );

	  chatbox(".chatbox-close").click(() => {
		
	    chatbox(".chatbox-popup, .chatbox-close").fadeOut();
	    chatbox(".messages, .scroll").empty(); //empty the messages from the dialog
	    location.reload();
	    
	  });

	  chatbox(".chatbox-maximize").click(() => {
	    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
	    chatbox(".chatbox-panel").fadeIn();
	    chatbox(".chatbox-panel").css({ display: "flex" });
	  });

	  chatbox(".chatbox-minimize").click(() => {
	    chatbox(".chatbox-panel").fadeOut();
	    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
	  });

	  chatbox(".chatbox-panel-close").click(() => {
	    chatbox(".chatbox-panel").fadeOut();
	    chatbox(".chatbox-open").fadeIn();
	  });
	});

window.loadWatsonAssistantChat({
  integrationID: "0cc1e6af-455e-4d6b-8468-b8f7a0d9b3fb", // The ID of this integration.
  region: "us-east" // The region your integration is hosted in.
}).then(function(instance){
  if(window.uiSystem){
    instance.render();
  };
});