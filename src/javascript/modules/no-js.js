const NoJS = () => {

  // Replace .no-js body class with .js to make it clear javascript is enabled and working
  $("body").addClass("js").removeClass("no-js");

};

NoJS();
