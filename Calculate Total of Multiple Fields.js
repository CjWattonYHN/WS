/*
*Javascript required to add multiple number fields together
*
*I'll use $ as a prefix for anything that is in the JS I'm describing 
*for example, if I have a variable called string I'll reference it as $string.
*
*/

/*
*
*The $calcTotal function below loops through every field with the specified class and 
*sums the values together and then outputs them to a field
*Change $CLASS to whatever class you've given your number fields
*
*If you want to do this twice in one form you will just need to change the function name slighty 
*and use a different class
*
*/

function calcTotal() {
    var tot = 0;
    $('.CLASS input').each(function() { tot += Number($(this).val()); });
    $('[name="num_total"]').val(tot);
} 


/*
*
*The below calls the function above on change of any field with the specified class
*
*change $FORMNAME to the name of your form and change $CLASS to the name of your class
*
*/

$('#dform_FORMNAME').off('change', '.CLASS input').on('change', '.CLASS input', function() { calcTotalpp(); });