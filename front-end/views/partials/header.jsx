var NewComponent = React.createClass({
    render: function() {
      return (
  
        <header>
          <link rel="stylesheet" href="/css/styles.css" />
          <div className="container">
            <h1>CLT ALERT</h1>
            <nav>
              <a href="index.ejs">Home</a>
              <a href="report.ejs">Report a Crime</a>
              <a href="emergency.ejs">Emergency Contacts</a>
              <a href="#about">About</a>
              <a href="#login">Login</a>
            </nav>
          </div>
        </header>
      );
    }
  });
