import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function Form({ onAddValue }: { onAddValue: (value : string) => void }) {
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputElement = form.elements.namedItem("myInput") as HTMLInputElement;

    onAddValue(inputElement.value);
  };

  return (
    <motion.form
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      onSubmit={submitHandler}
      className=" flex gap-4"
    >
      <input
        name="myInput"
        type="text"
        placeholder="Serach and boom !!"
        className="input w-full max-w-xs"
      />
      <button className="btn glass text-gray-500 ">SUBMIT</button>
    </motion.form>
  );
}
