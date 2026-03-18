import "./styles/Career.css";
const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Projects <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tomato Leaf Disease Detection</h4>
                <h5>Raspberry Pi Project</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed an AI-based system to detect tomato leaf diseases using
              image processing on Raspberry Pi. Helps farmers identify plant
              diseases early and improve crop yield.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IoT Bus & Truck Safety System</h4>
                <h5>Arduino + IoT</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed an IoT-based vehicle safety system with sensors and
              real-time monitoring to improve road safety for buses and trucks.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Stock Market Prediction Model</h4>
                <h5>Deep Learning Project</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a CNN-BiLSTM deep learning model to analyze financial data
              and predict stock market trends with improved correlation
              analysis.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;