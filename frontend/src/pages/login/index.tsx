import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import InputText from "../../components/InputText";

export default function PageLogin() {
  const navigate = useNavigate();

  function handleOnSubmit(eventForm: React.FormEvent<HTMLFormElement>) {
    eventForm.preventDefault();

    toast.success("Login has success");
    console.log(eventForm);
    navigate("/");
  }

  return (
    <div className="flex h-full justify-center items-center flex-col gap-3">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">CarnaChat</h1>
        <h4 className="text-1xl text-slate-300">The bast chat for web</h4>
      </div>
      <div>
        <form
          onSubmit={handleOnSubmit}
          name="form-login"
          method="POST"
          className="flex flex-col gap-2"
        >
          <div className="p-2 rounded bg-zinc-900">
            <label className="text-slate-200" htmlFor="input-email">
              Email
            </label>
            <InputText
              type="email"
              name="email"
              placeholder="email@email.com"
              autoComplete="email"
              id="input-email"
            />
          </div>
          <div className="p-2  rounded bg-zinc-900">
            <label className="text-slate-200" htmlFor="input-password">
              Password
            </label>
            <InputText
              type="password"
              name="password"
              id="input-password"
              placeholder="***********"
              autoComplete="current-password"
            />
          </div>
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </div>
  );
}
