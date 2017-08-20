define(
    ['app/CalculationModel'],
    function(CalculationModel){
        var keyClick = (function () {
        var digit = Array.prototype.slice.call(document.getElementsByClassName('number'), 0),
            operation = Array.prototype.slice.call(document.getElementsByClassName('operation'), 0),
            decimal = document.getElementsByClassName('decimal')[0],
            CE = document.getElementsByClassName('ClearEntry')[0],
            C = document.getElementsByClassName('Clear')[0];

            digit.forEach(function(item) {
                item.addEventListener('click', show);

                function show () {
                    CalculationModel.NumPressed(item.value);
                }
            });

            decimal.addEventListener('click', AddDecimal);

            function AddDecimal () {
                CalculationModel.Decimal();
            }

            CE.addEventListener('click', ClearEntry);

            function ClearEntry () {
                CalculationModel.ClearEntry();
            }

            C.addEventListener('click', Clear);

            function Clear() {
                CalculationModel.Clear();
            }

            operation.forEach(function(item) {
                item.addEventListener('click', Operation);

                function Operation () {
                    CalculationModel.Operation(item.value);
                    console.log();
                }
            });
        })();

        return keyClick;
    }
);