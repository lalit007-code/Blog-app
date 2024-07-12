import { ChangeEvent, useState } from "react";
import { SignupInput } from "@lalit_singh/blog-common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });
  console.log(postInputs.email, postInputs.name, postInputs.password);
  async function sendRequest(e) {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      alert("error while signing up");
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form action="">
        <div className="w-full max-w-lg">
          <div className="text-3xl font-extrabold mb-2 text-center">
            Create an account
          </div>
          <div className="text-slate-400 mb-2 text-center">
            {type === "signin"
              ? "Dont have an account"
              : "Already have an account"}
            <Link
              className="pl-2 underline"
              to={type === "signin" ? "/signup" : "/signin"}
            >
              {type === "signin" ? "Sign up" : "Sign in"}
            </Link>
          </div>
          <div className="w-full mb-4">
            {type === "signup" ? (
              <LabelledInput
                label="Name"
                placeholder="Lalit singh"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email"
              placeholder="lalit@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="lalit123"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
              type="password"
            />
          </div>
          <button
            type="submit"
            onClick={() => sendRequest(e)}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </form>
    </div>
  );
};

interface LabelledInputsType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputsType) {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
