const Notification = (props) => {
  const { className, iconUrl, message } = props;
  //const button-container = {` ${className}`}
  return (
    <div className="button-container">
      <img className="icon" src={iconUrl} />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <div className="button-container1">
      <Notification
        className="b1"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        message="Information Message"
      />
    </div>
    <div className="button-container2">
      <Notification
        className="b2"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        message="Success Message"
      />
    </div>
    <div className="button-container3">
      <Notification
        className="b3"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        message="Warning Message"
      />
    </div>
    <div className="button-container4">
      <Notification
        className="b4"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        message="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
