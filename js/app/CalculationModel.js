define(
    ['app/KeylayoutController'],
    function() {
        var MemoryCurrentNumber = 0,
            MemoryNewNumber = false,
            MemoryPendingOperation = '',
            display = document.querySelector('.c-calculator__display');

       return {

        NumPressed: function(number) {
            if (MemoryNewNumber) {
                display.value = number;
                MemoryNewNumber = false;
            } else {
                if (display.value == '0')
                    display.value = number;
                else
                    display.value += number;
            }
        },

        Operation: function(op) {
            var localOperationMemory = display.value;

            if(MemoryNewNumber && MemoryPendingOperation !== '=') {
                display.value = MemoryCurrentNumber;
            } else {
                MemoryNewNumber = true;
                if (MemoryPendingOperation === '+'){
                    MemoryCurrentNumber += parseFloat(localOperationMemory);
                } else if (MemoryPendingOperation === '-'){
                    MemoryCurrentNumber -= parseFloat(localOperationMemory);
                } else if (MemoryPendingOperation === '*'){
                    MemoryCurrentNumber *= parseFloat(localOperationMemory);
                } else if (MemoryPendingOperation === '/'){
                    MemoryCurrentNumber /= parseFloat(localOperationMemory);
                } else {
                    MemoryCurrentNumber = parseFloat(localOperationMemory);
                }

                display.value = MemoryCurrentNumber;
                MemoryPendingOperation = op;
            }
        },

        Decimal: function () {
            var curReadOut = display.value;

            if (MemoryNewNumber) {
                curReadOut = '0.';
                MemoryNewNumber= false;
            } else {
                if (curReadOut.indexOf('.') == -1)
                    curReadOut += '.';
            }

            display.value = curReadOut;
        },

        ClearEntry: function () {
            display.value = '0';
            MemoryNewNumber = true;
        },

        Clear:  function Clear () {
            display.value = '0';
            MemoryCurrentNumber = 0;
            MemoryPendingOperation = '';
            MemoryNewNumber = true;
        }
    };
    });
