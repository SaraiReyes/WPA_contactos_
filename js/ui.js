  document.addEventListener('DOMContentLoaded', function() {
      var sidenav = document.querySelectorAll('.sidenav');
      var modals = document.querySelectorAll('.modal');
      var fab = document.querySelectorAll('.modal');
      M.Sidenav.init(sidenav);
      M.Modal.init(modals);
      M.Modal.init(fab);
  });