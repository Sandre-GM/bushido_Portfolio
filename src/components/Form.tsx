import { useModeStore } from "../store";
import { useForm } from "react-hook-form";
import Error from "./Error";
import { Contact } from "../types";
import { sendEmail } from "../service/SendEmail";

export default function Form() {
  const mode = useModeStore((state) => state.mode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();

  return (
    <form className="mx-auto space-y-3" onSubmit={handleSubmit(sendEmail)}>
      <input
        id="name"
        type="text"
        placeholder="Name"
        className={
          mode
            ? "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white text-sm outline-BsGold-100 focus:bg-transparent hover:text-white"
            : "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white  text-sm outline-BsBlue-100 focus:bg-transparent hover:text-white"
        }
        {...register("name", {
          required: "Please fill the field",
        })}
      />

      {errors.name && <Error>{errors.name?.message?.toString()}</Error>}

      <input
        id="email"
        type="email"
        placeholder="Email"
        className={
          mode
            ? "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white text-sm outline-BsGold-100 focus:bg-transparent hover:text-white"
            : "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white  text-sm outline-BsBlue-100 focus:bg-transparent hover:text-white"
        }
        {...register("email", {
          required: "Please write your email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && <Error> {errors.email?.message?.toString()} </Error>}
      <input
        id="subject"
        type="text"
        placeholder="subject"
        className={
          mode
            ? "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white text-sm outline-BsGold-100 focus:bg-transparent hover:text-white"
            : "w-full rounded-md py-3 px-4 bg-BsSilver-100 text-white  text-sm outline-BsBlue-100 focus:bg-transparent hover:text-white"
        }
        {...register("subject", {
          required: "Please fill the field",
        })}
      />
      {errors.subject && <Error> {errors.subject?.message?.toString()} </Error>}
      <textarea
        id="message"
        placeholder="Message"
        className={
          mode
            ? "w-full rounded-md px-4 bg-BsSilver-100 text-white text-sm pt-3 outline-BsGold-100 focus:bg-transparent "
            : "w-full rounded-md px-4 bg-BsSilver-100 text-white text-sm pt-3 outline-white focus:bg-transparent "
        }
        {...register("message", {
          required: "Please fill the field",
        })}
      />

      {errors.message && <Error> {errors.message?.message?.toString()} </Error>}
      <button
        type="submit"
        className={
          mode
            ? "text-white bg-linear-90 from-BsYellow-100 to-BsGold-100 hover:bg-linear-180  rounded-md text-sm px-4 py-3 w-full cursor-pointer "
            : "text-white bg-linear-90 from-white to-BsGray-100 hover:bg-linear-180  rounded-md text-sm px-4 py-3 w-full cursor-pointer "
        }>
        Send
      </button>
    </form>
  );
}
