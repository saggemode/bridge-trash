import React from "react";

//INTERNAL IMPORT

import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";
import Layout from "../components/Layout";

const login = () => {
  return (
    <Layout>
      <div className="w-full pt-32">
        <div className="mx-auto max-w-screen-md">
          <div className="flex justify-center pt-20">
            <div className="w-1/2 flex flex-col pb-12">
              <h1 className="item-center text-lg mb-5">Login</h1>
              <LoginAndSignUp />
              <p className="ml-1">
                New user? <a href="/register">Create an account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;
