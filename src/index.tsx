import * as React from "react";
import { createRoot } from 'react-dom/client';
import Sandstorm from "./components/sandstorm";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <div>
    <Sandstorm />
  </div>
);