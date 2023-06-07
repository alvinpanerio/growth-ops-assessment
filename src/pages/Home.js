import axios from "axios";
import { useEffect, useState } from "react";

import userPic from "../assets/userphoto.png";

function Home() {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState(0);
  const [date, setDate] = useState("");
  const [once, setOnce] = useState(true);

  useEffect(() => {
    if (once) {
      countMe();
      setOnce(false);
    }
    axios
      .get("http://www.mocky.io/v2/5d73bf3d3300003733081869")
      .then((res) => {
        setUsers([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterAge = (e) => {
    setAge(e.target.value);
  };

  const handleConvertDate = () => {
    let format = /^(0[0-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (format.test(date)) {
      alert(
        `${date.split("/")[2]}-${date.split("/")[1]}-${date.split("/")[0]}`
      );
      setDate("");
    } else {
      alert("Invalid date format");
      setDate("");
    }
  };

  const countMe = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0) {
        console.log("Foo");
      } else if (i % 5 === 0) {
        console.log("Bar");
      } else {
        console.log(i);
      }
    }
  };

  return (
    <>
      <div className="bg-[--cream] py-8 uppercase text-[--brown] flex justify-center text-4xl font-bold">
        District Manager
      </div>
      <div className="w-full flex justify-center">
        <div className="max-w-[1366px] w-[1366px] flex flex-col ">
          <div className="lg:px-32 max-lg:flex max-lg:flex-col max-lg:items-center">
            <div className="mt-12 border-b-[3px] border-[--gray] pb-10">
              <p className="font-medium">Filter by Age</p>
              <select
                name="age"
                id="age"
                className="border border-1 border-[--gray] mt-3 p-2 focus:outline-none w-[320px] "
                onChange={handleFilterAge}
              >
                <option value="all" defaultChecked>
                  All
                </option>
                <option value="20below">20 and below</option>
                <option value="21to39">21 to 39</option>
                <option value="40above">40 and above</option>
              </select>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 border-b-[3px] border-[--gray] pb-2 max-lg:flex max-lg:flex-col max-lg:items-center">
              {users
                ?.filter((i) => {
                  if (age === "20below") {
                    return i.age <= 20;
                  } else if (age === "21to39") {
                    return i.age >= 21 && i.age <= 39;
                  } else if (age === "40above") {
                    return i.age >= 40;
                  } else {
                    return i;
                  }
                })
                ?.map((i, k) => {
                  return (
                    <div
                      className="w-[350px] h-[484px] mb-10 p-7 flex gap-5"
                      key={k}
                      style={{
                        boxShadow:
                          "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                      }}
                    >
                      <img
                        src={userPic}
                        alt="user"
                        className="w-[75px] h-[75px]"
                      />
                      <div className="text-[--black]">
                        <p className="uppercase text-xl font-bold mb-3">
                          {i.name}
                        </p>
                        <p className="font-medium">
                          Email:
                          <span className="break-all ml-1 font-bold">
                            {i.email}
                          </span>
                        </p>
                        <p className="font-medium">
                          Username:
                          <span className="break-all ml-1 font-bold">
                            {i.username}
                          </span>
                        </p>
                        <p className="font-medium">
                          Email:
                          <span className="break-all ml-1 font-bold">
                            {i.email}
                          </span>
                        </p>
                        <p className="font-medium">
                          Age:
                          <span className="break-all ml-1 font-bold">
                            {i.age}
                          </span>
                        </p>
                        <p className="font-medium">
                          Address:
                          <span className="break-all ml-1 font-bold">
                            {i.address.street}, {i.address.suite},{" "}
                            {i.address.city}, {i.address.zipcode}
                          </span>
                        </p>
                        <p className="font-medium">
                          Phone:
                          <span className="break-all ml-1 font-bold">
                            {i.phone}
                          </span>
                        </p>
                        <p className="font-medium">
                          Website:
                          <span className="break-all ml-1 font-bold">
                            {i.website}
                          </span>
                        </p>
                        <p className="font-medium">
                          Company:
                          <span className="break-all ml-1 font-bold">
                            {i.company}
                          </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="mt-12 border-b-[3px] border-[--gray] pb-10">
              <p className="font-medium">Date</p>

              <div className="flex gap-5 items-center mt-3 max-lg:flex max-lg:flex-col max-lg:items-center">
                <input
                  type="text"
                  className="border border-1 border-[--gray] p-2
              focus:outline-none w-[320px]"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="dd/mm/yyyy"
                  required
                />
                <button
                  className="bg-[--red] py-3 px-10 uppercase text-sm text-[--white]"
                  onClick={handleConvertDate}
                >
                  convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
