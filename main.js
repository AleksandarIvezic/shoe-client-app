const socket = new WebSocket("ws://localhost:8080/");
const signalValue = document.getElementById("socketValue");
const tempValue = "";
document.getElementById("signal").addEventListener("click", () => {
  if (socket.readyState) {
    socket.send(`${signalValue.value}\r\n${tempValue}`);
  }
});

const SUIT_VALUES = [
  { shoeCode: "0", gssCode: "H", label: "Hearts" },
  { shoeCode: "1", gssCode: "D", label: "Diamonds" },
  { shoeCode: "2", gssCode: "C", label: "Clubs" },
  { shoeCode: "3", gssCode: "S", label: "Spades" },
];

const RANK_VALUES = [
  { shoeCode: "0", gssCode: "", label: "Extra" },
  { shoeCode: "1", gssCode: "A", label: "Ace" },
  { shoeCode: "2", gssCode: "2", label: "2" },
  { shoeCode: "3", gssCode: "3", label: "3" },
  { shoeCode: "4", gssCode: "4", label: "4" },
  { shoeCode: "5", gssCode: "5", label: "5" },
  { shoeCode: "6", gssCode: "6", label: "6" },
  { shoeCode: "7", gssCode: "7", label: "7" },
  { shoeCode: "8", gssCode: "8", label: "8" },
  { shoeCode: "9", gssCode: "9", label: "9" },
  { shoeCode: "A", gssCode: "T", label: "10" },
  { shoeCode: "B", gssCode: "J", label: "Jack" },
  { shoeCode: "C", gssCode: "Q", label: "Queen" },
  { shoeCode: "D", gssCode: "K", label: "King" },
];

const signalElement = document.getElementById("displaySignal");
const submitButtonElement = document.getElementById("convert");
const cartInputElement = document.getElementById("card");

submitButtonElement.addEventListener("click", () => {
  getSignal(cartInputElement.value);
});

const getSignal = (card) => {
  const code1 = SUIT_VALUES.find((x) => x.gssCode === card[0]).shoeCode;
  const code2 = RANK_VALUES.find((x) => x.gssCode === card[1]).shoeCode;
  const first1 = "0".charCodeAt(0);
  const first2 = "D".charCodeAt(0);
  const second = code1.charCodeAt(0);
  const third = code2.charCodeAt(0);
  const sum = first1 + first2 + second + third;
  const checksum = sum.toString(16).toUpperCase();
  signalElement.innerText = `Signal: *0D${code1}${code2}${checksum}`;
};
