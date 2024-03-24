//components/blocks.jsx

import React, { useEffect, useState } from "react";
import AddressSelector from "./addressSelector";
import Header from "./header";
import BlockDetails from "./blockDetails";
import WidgetsIcon from "@mui/icons-material/Widgets";

function Blocks() {
  const [ethereumAddresses, setEthereumAddresses] = useState(null);

  //fetch from backend api
  const [selectedBlock, setSelectedBlock] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/blocks/addresses")
      .then((res) => res.json())
      .then((json) => setEthereumAddresses(json))
      .catch((error) => console.error(error));
  }, []);

  const handleOnChange = (address) => {
    console.log("block---", address);
    fetch(`http://localhost:5000/blocks/details/${address}`)
      .then((res) => res.json())
      .then((json) => setSelectedBlock(json))
      .catch((error) => console.error(error));
  };
  console.log(selectedBlock);

  return (
    <>
      <Header title="Blocks" headerSize="h5" icon={WidgetsIcon} />
      <AddressSelector
        InputLabel="Ethereum Block"
        LabelId="ethereum-block-select-label"
        handleAction={handleOnChange}
        addresses={ethereumAddresses}
      />

      <div class="container">
        <BlockDetails {...selectedBlock} />
      </div>
    </>
  );
}

export default Blocks;
