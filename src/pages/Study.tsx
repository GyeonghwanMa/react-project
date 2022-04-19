import React from "react";
import Counter from "../components/Counter";
import EmailForm from "../components/EmailForm";
import MyForm from "../components/MyForm";

function Study() {
    const onSubmit = (form: { name: string; description: string }) => {
        console.log(form);
    };
  return (
    <div>
        <Counter />
        <MyForm onSubmit={onSubmit} />
        <EmailForm />
    </div>
  );
}

export default Study;