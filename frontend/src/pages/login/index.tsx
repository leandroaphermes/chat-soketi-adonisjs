import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Form, { validatorRules } from "components/Base/Form";
import Button from "components/Button";
import InputText from "components/InputText";
import FormItem from "components/Base/Form/FormItem";
import useSession from "hooks/useSession";
import { useState } from "react";

type FormLoginType = {
  email: string;
  password: string;
};

const schemaValidate = validatorRules.object({
  email: validatorRules.string().min(8).max(64).email(),
  password: validatorRules.string().min(6).max(64),
});

export default function PageLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const session = useSession();

  const [loadingButton, setLoadingButton] = useState(false);

  function handleOnSubmit(values: FormLoginType) {
    setLoadingButton(true);
    session
      .signIn(values.email, values.password)
      .then(() => {
        navigate(location.state?.from?.pathname || "/");
      })
      .catch(() => {
        toast.error("Email or password invalid");
        setLoadingButton(false);
      });
  }

  return (
    <div className="flex h-full justify-center items-center flex-col gap-3">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">CarnaChat</h1>
        <h4 className="text-1xl text-slate-300">The bast chat for web</h4>
      </div>
      <div>
        <Form onSubmit={handleOnSubmit} rules={schemaValidate}>
          <div className="flex flex-col gap-2 p-3 rounded bg-zinc-900">
            <FormItem label="Email" name="email" required>
              <InputText
                type="email"
                placeholder="email@email.com"
                autoComplete="email"
              />
            </FormItem>
            <FormItem label="Password" name="password" required>
              <InputText
                type="password"
                placeholder="***********"
                autoComplete="current-password"
              />
            </FormItem>
            <Button htmlType="submit" loading={loadingButton}>
              Sign In
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
