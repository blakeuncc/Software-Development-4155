var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          &lt;%- include('./partials/header.ejs')%&gt;  
          <form id="crime-report-form">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="description">Crime Description:</label>
            <textarea id="description" name="description" rows={5} required defaultValue={""} />
            <label htmlFor="location">Location of Crime:</label>
            <input type="text" id="location" name="location" required />
            <button type="submit">Submit Report</button>
          </form>
          &lt;%- include('./partials/footer.ejs')%&gt;
          // include scripting for getting form responses
        </div>
      );
    }
  });