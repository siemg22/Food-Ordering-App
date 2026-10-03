
function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <span className="about-badge">
          ABOUT FOODIE
        </span>

        <h2>
          Great food, made simple.
        </h2>

        <p className="about-description">
          Foodie connects you with delicious meals from trusted local
          restaurants and talented chefs. We make ordering your favorite
          food simple, fast, and enjoyable.
        </p>

        <div className="about-features">

          <div className="about-feature">
            <span className="feature-icon">🍽️</span>
            <div>
              <h3>Quality Food</h3>
              <p>Fresh meals from carefully selected restaurants.</p>
            </div>
          </div>

          <div className="about-feature">
            <span className="feature-icon">⚡</span>
            <div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery straight to your door.</p>
            </div>
          </div>

          <div className="about-feature">
            <span className="feature-icon">❤️</span>
            <div>
              <h3>Made For You</h3>
              <p>A simple experience built around your cravings.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="about-card">

        <div className="about-card-icon">
          🍔
        </div>

        <h3>
          Your cravings,
          <br />
          our mission.
        </h3>

        <p>
          From your first click to the last bite,
          we're here to make every order better.
        </p>

      </div>

    </section>
  )
}

export default About

