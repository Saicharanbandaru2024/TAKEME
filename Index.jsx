import './Index.css';
import background from './background.jpeg'; 
import joy from './joy.jpeg'; // Ensure the image exists in the src folder
import tracking from './tracking.jpg'; // Ensure the image exists in the src folder
import money from './money.avif'; // Ensure the image exists in the src folder

function Index() {
    return (
        <div className="App">
            {/* Banner Section */}
            <div
                className="banner"
                style={{
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                    fontFamily: 'Arial, sans-serif',
                    backgroundImage: `url(${background})`, // Use template literals
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed' // Keeps background fixed
                }}
            >
                {/* Header Section */}
                <header className="header">
                    <div className="logo">
                        <h1><i>TAKEME</i></h1>
                    </div>
                    <div className="Quotes">
                        <h2>Make your trip easier and more enjoyable</h2>
                    </div>
                    <nav className="header-menu">
                        <a href="#">Search</a>
                        <a href="#">Publish a Ride</a>
                        <a href="#">Profile</a>
                    </nav>
                </header>

                {/* Search Bar */}
                <div className="searchbar-container">
                    <div className="searchbar">
                        <input type="text" placeholder="Boarding point" />
                        <input type="text" placeholder="Destination" />
                        <input type="date" />
                        <button>Search</button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features">
                <img src={joy} alt="Happy Travelers" className="joy-image" />
                <div className="joy-text">
                    <h2>Why choose us?</h2>
                    <p>Find out why we are the best choice for your travel needs.</p>
                </div>
            </div>

            {/* Other Sections */}
            <div className="information">
                <img src={tracking} alt="404" className="tracking-image" />
                <div className="tracking-text">
                    <h3>Tracking your trek isn’t just about the destination—it’s about the journey and the memories created along the way</h3>
                    <p>Every step is a new story in the making</p>
                </div>
            </div>

            <div className="Money">
                <img src={money} alt="404" className="location-image" />
                <div className="money-text">
                    <h3>Why pay more? Ride together and split the cost!</h3>
                    <p>Budget-friendly travel starts with carpooling</p>
                </div>
            </div>
            <section className="info-section dark">
                <h2>Where do you want to go?</h2>
                <div className="button-group">
                    <button>New York → Chicago</button>
                    <button>New Delhi → Jaipur</button>
                </div>
            </section>

            {/* Help Centre */}
            <section className="help-centre">
                <h2>Carpool Help Centre</h2>
                <div className="help-articles">
                    <div>
                        <h3>How do I book a ride?</h3>
                        <p>Find out how to book a ride easily.</p>
                    </div>
                    <div>
                        <h3>How do I cancel?</h3>
                        <p>Learn about our cancellation policies.</p>
                    </div>
                    <div>
                        <h3>What are the benefits of carpooling?</h3>
                        <p>Save money and make new connections!</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className="footer">
                <p>© 2022 TAKEME</p>
            </div>
        </div>
    );
}

export default Index;
