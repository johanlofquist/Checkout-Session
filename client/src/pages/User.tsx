import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IUser } from "../models/User";
import { login, logoutFromServer, saveUser } from "../services/userService";
import { useUser } from "../context/UserContext";
import { ILoggedInUser } from "../models/loggedInUser";
import { getOrders } from "../services/orderService";
import { Order } from "../models/Order";
import { RenderOrder } from "../components/RenderOrder";

export const SignIn = () => {
  const { isLoggedIn, user, setLoggedInUser, logout } = useUser();
  const [createEmailInput, setCreateEmailInput] = useState("");
  const [createPasswordInput, setCreatePasswordInput] = useState("");
  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");
  const [createAlert, setCreateAlert] = useState("");
  const [loginAlert, setLoginAlert] = useState("");
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const response = await getOrders(user.email);
        setOrders(response);
      };
      fetchOrders();
    }
  }, [user]);

  const handleLogoutClick = async () => {
    logout();
    const response = await logoutFromServer();
    console.log(response);
  };

  const handleCreateEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateEmailInput(e.target.value);
  };
  const handleCreatePasswordInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setCreatePasswordInput(e.target.value);
  };
  const handleLoginEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginEmailInput(e.target.value);
  };
  const handleLoginPasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginPasswordInput(e.target.value);
  };

  const handleCreateClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: IUser = {
      email: createEmailInput,
      password: createPasswordInput,
    };

    const response = await saveUser(user);
    setCreateAlert(response as string);
    setCreateEmailInput("");
    setCreatePasswordInput("");
  };

  const handleLoginClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: IUser = {
      email: loginEmailInput,
      password: loginPasswordInput,
    };

    const response = await login(user);
    if (response.status === 201) {
      setLoginAlert(response.data as string);
    }
    if (response.status === 200) {
      setLoggedInUser(response.data as ILoggedInUser);
    }
  };

  return (
    <div className="bg-[--mustard] h-[750px] flex justify-center items-center gap-10">
      {isLoggedIn ? (
        <>
          <div className="bg-[#f2f2f2] border border-black black-shadow w-[500px] flex flex-col items-center justify-around relative gap-10 p-5">
            <div>
              <h2 className="madimi-one-regular text-2xl">LOGGED IN AS</h2>
              <div
                className="bg-white px-2 py-1 border border-black black-shadow mt-2"
                onClick={() => console.log(orders)}
              >
                {user?.email}
              </div>
            </div>
            {orders.length > 0 ? (
              <div className="text-center flex flex-col gap-3">
                <h2 className="madimi-one-regular text-2xl">ORDER HISTORY</h2>

                {orders.map((order) => (
                  <RenderOrder order={order} key={order.orderNumber}/>
                ))}
              </div>
            ) : (
              ""
            )}

            <button
              className="bg-white px-2 py-1 border border-black black-shadow mt-2"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <form
            className="bg-[#f2f2f2] border border-black black-shadow w-[350px] h-[400px] flex flex-col items-center justify-center relative gap-2"
            onSubmit={handleLoginClick}
          >
            <h2 className="madimi-one-regular text-2xl absolute top-6">
              SIGN IN
            </h2>
            <div>
              <p>E-MAIL</p>
              <input
                type="email"
                className="border border-black black-shadow inline p-1"
                value={loginEmailInput}
                onChange={handleLoginEmailInputChange}
                required
              />
            </div>
            <div>
              <p>PASSWORD</p>
              <input
                type="password"
                className="border border-black black-shadow inline p-1"
                value={loginPasswordInput}
                onChange={handleLoginPasswordInputChange}
                required
              />
            </div>
            <button className="bg-white px-2 py-1 border border-black black-shadow mt-2">
              LOGIN
            </button>
            <p className="absolute bottom-11">{loginAlert}</p>
          </form>
          <form
            className="bg-[#f2f2f2] border border-black black-shadow w-[350px] h-[400px] flex flex-col items-center justify-center relative gap-2"
            onSubmit={handleCreateClick}
          >
            <h2 className="madimi-one-regular text-2xl absolute top-6">
              CREATE ACCOUNT
            </h2>
            <div>
              <p>E-MAIL</p>
              <input
                type="email"
                className="border border-black black-shadow inline p-1"
                value={createEmailInput}
                onChange={handleCreateEmailInputChange}
                required
              />
            </div>
            <div>
              <p>PASSWORD</p>
              <input
                type="password"
                className="border border-black black-shadow inline p-1"
                value={createPasswordInput}
                onChange={handleCreatePasswordInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white px-2 py-1 border border-black black-shadow mt-2"
            >
              CREATE
            </button>
            <p className="absolute bottom-11">{createAlert}</p>
          </form>
        </>
      )}
    </div>
  );
};
