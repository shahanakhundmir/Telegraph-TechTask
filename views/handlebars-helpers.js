/*! ******************************
  Handlebars helpers
  *******************************/

//  return the first item of a list only
// usage: {{#first items}}{{name}}{{/first}}
/**Handlebars.registerHelper('first', function(context, block) {
    return block(context[0]);
  });
  
  //  return a comma-serperated list from an iterable object
  // usage: {{#toSentance tags}}{{name}}{{/toSentance}}
  Handlebars.registerHelper('toSentance', function(context, block) {
    var ret = "";
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + block(context[i]);
      if (i<j-1) {
        ret = ret + ", ";
      };
    }
    return ret;
  });
  */
  
  //  format an ISO date using Moment.js
  //  http://momentjs.com/
  //  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
  //  usage: {{dateFormat creation_date format="MMMM YYYY"}}
  Handlebars.registerHelper('dateFormat', function(context, block) {
    if (window.moment) {
      var f = block.hash.format || "MMM Do, YYYY";
      return moment(Date(context)).format(f);
    }else{
      return context;   //  moment plugin not available. return data as is.
    };
  });

  modules.export