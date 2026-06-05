const Footer = () => {

  return (

    <footer
      style={{
        background:"#111",
        padding:"80px 0 30px 0",
        marginTop:"120px",
        borderTop:
          "2px solid #ff4d00",
      }}
    >

      <div className="container">

        <div className="row">

          {/* LOGO */}

          <div className="col-md-4 mb-5">

            <h1
              style={{
                color:"white",
                fontSize:"50px",
                fontWeight:"bold",
              }}
            >
              Luxury

              <span
                style={{
                  color:"#ff4d00",
                }}
              >
                Cars
              </span>

            </h1>

            <p
              style={{
                color:"gray",
                marginTop:"20px",
                lineHeight:"30px",
              }}
            >
              Experience the future
              of luxury driving with
              premium performance
              and modern technology.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="col-md-2 mb-5">

            <h3
              style={{
                color:"white",
                marginBottom:"25px",
              }}
            >
              Quick Links
            </h3>

            <p style={{color:"gray"}}>
              Home
            </p>

            <p style={{color:"gray"}}>
              Cars
            </p>

            <p style={{color:"gray"}}>
              About
            </p>

            <p style={{color:"gray"}}>
              Contact
            </p>

          </div>

          {/* SERVICES */}

          <div className="col-md-3 mb-5">

            <h3
              style={{
                color:"white",
                marginBottom:"25px",
              }}
            >
              Services
            </h3>

            <p style={{color:"gray"}}>
              Premium Cars
            </p>

            <p style={{color:"gray"}}>
              Test Drive
            </p>

            <p style={{color:"gray"}}>
              Car Booking
            </p>

            <p style={{color:"gray"}}>
              Car Delivery
            </p>

          </div>

          {/* CONTACT */}

          <div className="col-md-3 mb-5">

            <h3
              style={{
                color:"white",
                marginBottom:"25px",
              }}
            >
              Contact Us
            </h3>

            <p style={{color:"gray"}}>
              📍 Ahmedabad, India
            </p>

            <p style={{color:"gray"}}>
              📞 +91 9876543210
            </p>

            <p style={{color:"gray"}}>
              ✉ luxurycars@gmail.com
            </p>

          </div>

        </div>

        <hr
          style={{
            borderColor:"#333",
          }}
        />

        <div
          className=
          "text-center mt-4"
        >

          <p
            style={{
              color:"gray",
              margin:0,
            }}
          >
            © 2025 Luxury Cars.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>

  );
};

export default Footer;