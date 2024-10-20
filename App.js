const parent = React.createElement(
    'div',
    {id: 'parent'},
    [
        React.createElement(
        'div',
        {id: 'sibling-1'},
        React.createElement(
            'div',
            {id: 's1-child'},
            React.createElement(
                'h1',
                {id: 's1-head'},
                "React is a Js Library!"
                )
        )
        ),
        React.createElement(
            'div',
            {id: 'sibling-2'},
            React.createElement(
                'div',
                {id: 's2-child'},
                React.createElement(
                    'h1',
                    {id: 's2-head'},
                    "React is a Js Library!"
                    )
            )
            )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);

