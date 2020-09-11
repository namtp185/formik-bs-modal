import React, { useState } from "react";
import FormModal from "./FormModal";
import { Button } from "react-bootstrap";
import Create from "./Create";

export default function App() {
  const [open, setOpen] = useState(false);

  const doSubmit = (values) => {
    alert(JSON.stringify(values));
    setOpen(false);
  };

  return (
    <div className="App">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      {open && (
        <FormModal
          onCancel={() => setOpen(false)}
          show={open}
          Content={<Create doSubmit={() => doSubmit()} />}
        />
      )}
    </div>
  );
}
