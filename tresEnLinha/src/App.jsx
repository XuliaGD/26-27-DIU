import './App.css'


function Cadrado({ valor }) {
  return <button className="square">{ valor }</button>;
}


export default function Taboleiro() {
  return (
        <>
      <div className="board-row">
        <Cadrado valor="1"/>
        <Cadrado valor="2"/>
        <Cadrado valor="3"/>
      </div>
      <div className="board-row">
        <Cadrado valor="4"/>
        <Cadrado valor="5"/>
        <Cadrado valor="6"/>
      </div>
      <div className="board-row">
        <Cadrado valor="7"/>
        <Cadrado valor="8"/>
        <Cadrado valor="9"/>
      </div>
    </>
  );
}
