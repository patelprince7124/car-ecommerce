import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#0f0f0f",
          minHeight: "100vh",
          color: "white",
          padding: "60px 0",
        }}
      >

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-md-5">

              <div
                className="text-center p-5"
                style={{
                  background: "#1a1a1a",
                  borderRadius: "20px",
                }}
              >

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt=""
                  width="120"
                />

                <h2 className="mt-4">
                  Prince Patel
                </h2>

                <p className="text-secondary">
                  prince@gmail.com
                </p>

                <button
                  className="btn mt-3"
                  style={{
                    background: "#ff4d00",
                    color: "white",
                    padding: "10px 30px",
                  }}
                >
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Profile;