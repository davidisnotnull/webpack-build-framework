import '../scss/app.scss';
import 'bootstrap';

window.onload = () => {

     /* Prevent Enter key from submitting form */
     $('form input').on('keydown', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            return false;
        }
    });

    /*
        Custom jquery-validation handling for check boxes must equal true in Razor Pages
        Decorate C# model bool properties with
        [Range(typeof(bool), 'true', 'true', ErrorMessage = 'Add your error message')]
        to make their corresponding checkbox validate to 'must equal true'
    */
        var defaultRangeValidator = $.validator.methods.range;
        $.validator.methods.range = function (value, element, param) {
            if (element.type === 'checkbox') {
                // if it's a checkbox return true if it is checked
                return element.checked;
            } else {
                // otherwise run the default validation function
                return defaultRangeValidator.call(this, value, element, param);
            }
        }

    // Your code here
    console.log('Hello World!');
};