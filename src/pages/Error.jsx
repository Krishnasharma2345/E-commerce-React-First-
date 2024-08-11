import React, { useState, useEffect } from 'react';

const Error = (props) => {
  const [res, setRes] = useState("");

  useEffect(() => {
    async function errorProvider() {
      let error = await props.error;
      setRes(error.toString());
    }
    errorProvider();
  }, [props.error]);

  return (
    <div>
      Page Not Found {res}
    </div>
  );
}

export default Error;
