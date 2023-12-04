import React from "react";
import InputForm from "./InputForm";
import List from "./List";

const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <InputForm />
          <div className="col-8">
<List/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
