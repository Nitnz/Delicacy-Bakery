import {
  Nav,
  Order,
  OurProducts,
  TreatsForOccasion,
  Delivery,
  Catering,
  Footer,

} from "./sections";

const App = () => (
  <main className="relative">
    <section><Nav /></section>
    <section><Order /></section>
    <section><OurProducts /></section>
    <section><TreatsForOccasion /></section>
    <section><Delivery /></section>
    <section><Catering /></section>
    <section><Footer /></section>
  </main>
);

export default App;



