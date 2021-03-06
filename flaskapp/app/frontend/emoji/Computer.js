import React from 'react';

export default function Computer(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <g fill="#212528">
        <path d="m7.3 53.8h49.4c.8 0 1.4-.6 1.4-1.4v-33c0-.8-.6-1.4-1.4-1.4h-49.4c-.7 0-1.3.6-1.3 1.4v33c0 .8.6 1.4 1.3 1.4" />
        <path d="M2,58.7C2,60.3,3.3,62,5,62h54c1.6,0,3-1.7,3-3.3H2z" />
      </g>
      <path fill="#ddd" d="m57 53.8h-50l-5 4.9h60z" />
      <path fill="#bfbebe" d="m55.3 54.2h-46.6l-1.7 2h50z" />
      <path fill="#212528" d="m37.1 57.1h-10.2l-.8 1.1h11.8z" />
      <path fill="#3e4347" d="m9 21h46v29.8h-46z" />
      <circle cx={32} cy="19.6" r=".8" fill="#ddd" />
      <path d="m36.3 60.8h-8.6c-.3 0-1.1 0-1.1-1h10.8c0 1-.8 1-1.1 1" fill="#3e4347" />
    </svg>
  );
}
