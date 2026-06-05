import {
  useEffect,
  useState
} from "react";

import Navbar
  from "../components/Navbar";
import API from "../services/api";
const ManageUsers = () => {

  const [users,
    setUsers] =
    useState([]);

  /* GET USERS */

  // useEffect(() => {

  //   const data =
  //     JSON.parse(

  //       localStorage.getItem(
  //         "users"
  //       )

  //     ) || [];

  //   setUsers(data);

  // }, []);
  //aa user eefect no navo code che 
  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await API.get(
          "/users"
        );

        setUsers(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchUsers();

  }, []);
  /* DELETE USER */

  // const deleteUser =
  //   (id) => {

  //     const updated =
  //       users.filter(

  //         (item, index) =>

  //           index !== id
  //       );

  //     setUsers(updated);

  //     localStorage.setItem(

  //       "users",

  //       JSON.stringify(
  //         updated
  //       )
  //     );
  //   };

  // aa navo code che delete user mate
  const deleteUser = async (id) => {

    try {

      const updatedUsers =
        users.filter(
          (user) =>
            user._id !== id
        );

      setUsers(updatedUsers);

    } catch (error) {

      console.log(error);

    }

  };
  /* BLOCK USER */

  const blockUser =
    (id) => {

      const updated =
        users.map(

          (item, index) => {

            if (
              index === id
            ) {

              return {

                ...item,

                blocked:
                  !item.blocked,
              };
            }

            return item;
          }
        );

      setUsers(updated);

      localStorage.setItem(

        "users",

        JSON.stringify(
          updated
        )
      );
    };

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

          <h1
            className=
            "fw-bold mb-5"

            style={{
              fontSize: "60px",
            }}
          >
            Manage

            <span
              style={{
                color: "#ff4d00",
              }}
            >
              {" "}Users
            </span>

          </h1>

          {
            users.length === 0 ? (

              <h3
                style={{
                  color: "gray",
                }}
              >
                No Users Found
              </h3>

            ) : (

              <div className="table-responsive">

                <table
                  className=
                  "table table-dark table-bordered"
                >

                  <thead>

                    <tr>

                      <th>
                        No
                      </th>

                      <th>
                        Name
                      </th>

                      <th>
                        Email
                      </th>

                      <th>
                        Status
                      </th>

                      <th>
                        Action
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      users.map(

                        (
                          item,
                          index
                        ) => (

                          <tr
                            key={index}
                          >

                            <td>
                              {index + 1}
                            </td>

                            <td>
                              {item.name}
                            </td>

                            <td>
                              {item.email}
                            </td>

                            <td>

                              <span
                                className={
                                  item.blocked

                                    ? "badge bg-danger"

                                    : "badge bg-success"
                                }
                              >
                                {
                                  item.blocked

                                    ? "Blocked"

                                    : "Active"
                                }
                              </span>

                            </td>

                            <td>

                              <button
                                className=
                                "btn btn-warning me-2"

                                onClick={() =>
                                  blockUser(
                                    index
                                  )
                                }
                              >
                                {
                                  item.blocked

                                    ? "Unblock"

                                    : "Block"
                                }
                              </button>

                              <button
                                className=
                                "btn btn-danger"

                                onClick={() =>
                                  deleteUser(
                                    index
                                  )
                                }
                              >
                                Delete
                              </button>

                            </td>

                          </tr>

                        )
                      )
                    }

                  </tbody>

                </table>

              </div>

            )
          }
        </div>

      </div>

    </>
  );
};

export default
  ManageUsers;