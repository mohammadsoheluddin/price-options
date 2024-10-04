import axios from "axios";
import { useEffect, useState } from "react";
import { Audio, ColorRing } from "react-loader-spinner";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data));
    axios("https://openapi.programming-hero.com/api/phones?search=iphone").then(
      (data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setPhones(phoneWithFakeData);
        setLoading(false);
      }
    );
  }, []);
  return (
    <div>
      <h1>{phones.length}</h1>
      <div>
        {loading && (
          <div className="flex justify-center items-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        )}
      </div>
      <BarChart width={1500} height={400} data={phones}>
        <Bar dataKey="name" />
        <Bar dataKey="price" fill="green" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="price" />
        <Tooltip />
      </BarChart>
      <div></div>
    </div>
  );
};

export default Phones;
