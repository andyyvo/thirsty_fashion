import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";

export const ErrorPage = () => {
  return (
    <>
      <PageScreen>
        <span>regular text</span>
        <h1 className="avenir">content</h1>
        <h1 className="avenir-italic">content</h1>
        <h1 className="playfair">content</h1>
        <h1 className="playfair-italic">content</h1>
        <span>regular text</span>
        <h2 className="avenir">content</h2>
        <h2 className="avenir-italic">content</h2>
        <h2 className="playfair">content</h2>
        <h2 className="playfair-italic">content</h2>
        <span>regular text</span>
        <h3 className="avenir">content</h3>
        <h3 className="avenir-italic">content</h3>
        <h3 className="playfair">content</h3>
        <h3 className="playfair-italic">content</h3>
        <span>regular text</span>
        <p className="avenir">content</p>
        <p className="avenir-italic">content</p>
        <p className="playfair">content</p>
        <p className="playfair-italic">content</p>
      </PageScreen>
    </>
  );
}