import {
  useEffect,
  useState
} from "react";

import API
from "../services/api";

const AdminPayments =
  () => {

    const [orders,
      setOrders] =
      useState([]);

    useEffect(() => {

      const fetchOrders =
        async () => {

          const response =
            await API.get(
              "/orders"
            );

          setOrders(
            response.data
          );

        };

      fetchOrders();

    }, []);

    return (

      <div
        style={{
          padding: "40px",
          background: "#0f0f0f",
          minHeight: "100vh",
          color: "white",
        }}
      >

        <h1>
          Payments
        </h1>

        <table
          className=
          "table table-dark"
        >

          <thead>

            <tr>

              <th>
                User
              </th>

              <th>
                Car
              </th>

              <th>
                Amount
              </th>

              <th>
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {
              orders.map(
                (item) => (

                  <tr
                    key={
                      item._id
                    }
                  >

                    <td>
                      {
                        item.userName
                      }
                    </td>

                    <td>
                      {
                        item.carName
                      }
                    </td>

                    <td>
                      $
                      {
                        item.price
                      }
                    </td>

                    <td>
                      {
                        item.paymentStatus
                      }
                    </td>

                  </tr>
                )
              )
            }

          </tbody>

        </table>

      </div>
    );
};

export default
AdminPayments;