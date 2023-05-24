// sharedservices.js
import React, { createContext, useState } from "react";
import MyComponent2 from "../MyComponent2";

export const IssueContext = createContext();

const SharedService = () => {
  const [issue, setIssue] = useState(0);

  const issueCount = () => {
    setIssue(issue + 1);
  };

  return (
    <IssueContext.Provider value={{ issue, issueCount }}>
      <MyComponent2 />
    </IssueContext.Provider>
  );
};

export default SharedService;
