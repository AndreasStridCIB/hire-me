import React, { Suspense, lazy } from "react";

const ChildrenPage = lazy(() => import("./children/ChildrenPage"));

export const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ChildrenPage />
      </Suspense>
    </>
  );
};
