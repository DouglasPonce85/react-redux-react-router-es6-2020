import React from 'react';
import { render } from 'react-dom';

function Hi() {
  return <p>H1</p>
}

render(<Hi />, document.getElementById('app'));
