import React from "react";
import Table from "react-bootstrap/Table";
const CardDetails = () => {
  return (
    <div>
      <div className="container mt-3">
        <h2>Items details page </h2>
        <section className="container mt-5" style={{ width: "900px" }}>
          <div className="iteamsdetails d-flex">
            <div className="items_img ">
              <img
                src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp"
                alt=""
              />
            </div>
            <div className="details">
              <Table>
                <tr>
              
                  <td>
                    <p>
                      <strong>Reastaurent </strong> : Masala Dosa
                    </p>
                    <p>
                      <strong>Price </strong> :₹ 300
                    </p>
                    <p>
                      <strong>Dishes </strong> : North Indian, Biryani, Mughlai
                    </p>
                    <p>
                      <strong>Total</strong> :₹ 300
                    </p>
                  </td>
                  
                  
                  <td>
                    <p>
                      <strong>Rating </strong>
                      <span
                        style={{
                          background: "green",
                          color: "#fff",
                          padding: "2px 5px",
                          borderRadius: "5px",
                        }}
                      >
                         : 3.5 ★
                      </span>
                    </p>
                    <p>
                      <strong>Order Review</strong>
                      <span> : 1175 + order placed from here recently</span>
                    </p>
                    <p>
                      <strong>Remove </strong>
                      <span>
                        <i
                          className="fas fa-trash"
                          style={{
                            color: "red",
                            fontSize: 20,
                            cursor: "pointer",
                          }}
                        ></i>
                      </span>
                    </p>
                  </td>
                  
                </tr>
              </Table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardDetails;
