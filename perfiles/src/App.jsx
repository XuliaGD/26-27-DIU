
import './App.css'

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};


/* 
Os atributos de JSX dentro de comiñas son pasados como strings.
As chaves permítenche meter lóxica e variables de JavaScript no teu mercado.
Funcionan dentro do contido da etiqueta JSX ou inmediatamente despois de = nos atributos.
{{ e }} non é unha sintaxe especial: é un obxecto JavaScript metido dentro de chaves JSX. 
*/

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}