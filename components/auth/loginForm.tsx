import InputElement from "../inputFields/inputElement";
import PasswordElement from "../inputFields/passportElement";
import { Button } from "../ui/button";

export default function LoginForm() {
  return (
    <div className="space-y-4">
      <InputElement label="Email" name="email" placeholder="test@yopmail.com" />
      <PasswordElement label="Password" name="password" placeholder="*******" />
      <Button className="w-full mt-2 cursor-pointer">Login & Continue</Button>
    </div>
  );
}
