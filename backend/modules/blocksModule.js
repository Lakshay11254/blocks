//backend/blocksModule.js
const ethereumAddresses = [
  "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
  "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
  "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
  "0xccf98fbf8c9ba7c7b0001efd1cf4fa1369a36f1b",
  "0xcefd1cf4fa1369a36f1bcf98f7c7b0001bf8c9ba",
  "0xafaa6990069ecba8570dab82cba2caf6ff77bhgg",
];

const ethereumBlocks = [
  {
    address: "0xafa57bd80dfef746aaa7bea1e9e024e89ab1056e",
    balance: 542,
    gasUsed: 3051,
  },
  {
    address: "0xffaa6990069ecba8570dab82cba2caf6ff77b8fa",
    balance: 690,
    gasUsed: 4665,
  },
  {
    address: "0xc7c7b0001efd1cf4fa1369a36f1bcf98fbf8c9ba",
    balance: 210,
    gasUsed: 2665,
  },
  {
    address: "0xccf98fbf8c9ba7c7b0001efd1cf4fa1369a36f1b",
    balance: 190,
    gasUsed: 4635,
  },
  {
    address: "0xcefd1cf4fa1369a36f1bcf98f7c7b0001bf8c9ba",
    balance: 690,
    gasUsed: 4665,
  },
  {
    address: "0xafaa6990069ecba8570dab82cba2caf6ff77bhgg",
    balance: 190,
    gasUsed: 1665,
  },
];

const getAddresses = () => {
  return ethereumAddresses;
};

const getDetail = (address) => {
  return ethereumBlocks.find((block) => block.address === address);
};

console.log("getDetail", getDetail("0xlll"));
console.log("getAddress", getAddresses());

module.exports = {
  getAddresses,
  getDetail,
};
