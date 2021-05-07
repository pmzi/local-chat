export default function playSound(fileAddress) {
  const audio = new Audio(fileAddress);
  audio.play();
}
