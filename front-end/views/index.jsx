var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          &lt;%- include('./partials/header.ejs')%&gt;  
          <main>
            <p>
              Welcome to the Crime Reporting App! This application allows you to report crimes in your area quickly and easily.
              Your reports help make the community safer and more aware of criminal activities.
              Please click the button below to submit a crime report.
            </p>
            <a href="#report page"><button>Report a Crime</button></a>
          </main>
          &lt;%- include('./partials/footer.ejs')%&gt;
        </div>
      );
    }
  });