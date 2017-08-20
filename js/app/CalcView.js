define(
    function(){
        var SetElemCalculator = (function() {
            var interfaceItems = [
                    {
                        text: 'CE',
                        value: 'CE',
                    },
                    {
                        text: 'C',
                        value: 'C',
                    },
                    {
                        text: '7',
                        value: 7,
                    },
                    {
                        text: '8',
                        value: 8,
                    },
                    {
                        text: '9',
                        value: 9,
                    },
                    {
                        text: '÷',
                        value: '/',
                    },
                    {
                        text: '4',
                        value: 4,
                    },
                    {
                        text: '5',
                        value: 5,
                    },
                    {
                        text: '6',
                        value: 6,
                    },
                    {
                        text: '×',
                        value: '*',
                    },
                    {
                        text: '1',
                        value: 1,
                    },
                    {
                        text: '2',
                        value: 2,
                    },
                    {
                        text: '3',
                        value: 3,
                    },
                    {
                        text: '−',
                        value: '-',
                    },
                    {
                        text: '0',
                        value: 0,
                    },
                    {
                        text: '.',
                        value: '.',
                    },
                    {
                        text: '=',
                        value: '=',
                    },
                    {
                        text: '+',
                        value: '+',
                    },
                ],
                display,
                button,
                clearButton,
                calculatorElement = document.querySelector('.c-calculator');


            display = document.createElement('input');
            display.classList.add('c-calculator__display');
            display.setAttribute('maxlength', 12);
            calculatorElement.appendChild(display);

            function addButton (text, value) {
                button = document.createElement('button');
                button.classList.add('c-calculator__button');
                button.textContent = text;
                button.value = value;
                return button;
            }

            interfaceItems.forEach(function(item) {
                button = addButton(item.text, item.value);

                if (typeof item.value === 'number') {
                    button.classList.add('number');
                } else if (item.value === '.') {
                    button.classList.add('decimal');
                } else if (item.value === 'CE') {
                    button.classList.add('ClearEntry');
                } else if (item.value === 'C') {
                    button.classList.add('Clear');
                }  else {
                    button.classList.add('operation');
                }
                calculatorElement.appendChild(button);
            });
        })();
    return SetElemCalculator;
    }
);