var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          &lt;%- include('./partials/header.ejs')%&gt;  
          <main>
            <h1>Emergency Contact Information</h1>
            <p>If you are in an emergency, please contact the appropriate authorities immediately. Below are some important contacts:</p>
            <h1>Emergency Services</h1>
            <ul>
              <p><strong>Police:</strong> 911</p>
              <p><strong>Fire Department:</strong> 911</p>
              <p><strong>Ambulance Services:</strong> 911</p>
            </ul>
            <h1>National Hotlines</h1>
            <ul>
              <p><strong>Domestic Violence Hotline:</strong> 1-800-799-7233 </p>
              <p><strong>National Suicide Prevention Lifeline:</strong> 1-800-273-8255</p>
              <p><strong>Substance Abuse Helpline:</strong> 1-800-662-HELP (4357)</p>
            </ul>
            <p>Always remember to stay safe and reach out for help when needed.</p>
          </main>
          &lt;%- include('./partials/footer.ejs')%&gt;
        </div>
      );
    }
});