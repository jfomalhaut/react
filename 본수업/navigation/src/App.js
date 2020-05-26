import React from 'react';

const ARR = [
	{
		label: 'Men',
		items: [
			{ id: 1, name: 'new', path: 'new' },
			{ id: 1, name: 'best', path: 'best' },
		],
	},
	{
		label: 'Women',
		items: [
			{ id: 1, name: 'new', path: 'new' },
			{ id: 1, name: 'best', path: 'best' },
			{ id: 1, name: 'test', path: 'test' },
		],
	},
];

const Arr2 = [
  {id: 1, name: 'new', path:' new', type: 1},
  {id: 1, name: 'best', path:' best', type: 1},
  {id: 1, name: 'new', path:' new', type: 2},
  {id: 1, name: 'best', path:' best', type: 2},
  {id: 1, name: 'test', path:' test', type: 2},
];

function App() {
  console.log(ARR);
	return (
    <div className="App">
      {ARR.map(item => (
        <div>
          <h1>{item.label}</h1>
          {item.items.map(item2 => (
            <h2>{item2.name}</h2>
          ))}
        </div>
      ))}
    </div>
  )
}

export default App;
