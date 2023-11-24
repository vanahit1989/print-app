import React, {useRef} from 'react';
import './App.css';
import ReactToPrint from "react-to-print";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const docs = [
    {uri: 'https://dev-xuj0ouyv-file-bucket.s3.us-west-2.amazonaws.com/a7bce809-7eb2-4599-bf7c-094ea25e15e1/0fbdde43-eb21-4853-bb8b-d536c15b28ee'}
];

function App() {
  const ref = useRef<null | HTMLIFrameElement>(null);
  const element  = document.getElementById('msdoc-iframe');
  return (
    <div>
      <ReactToPrint content={() => element} trigger={() => <button>Print</button>} />
            <DocViewer   documents={docs} pluginRenderers={DocViewerRenderers} />

    </div>
  );
}

export default App;
