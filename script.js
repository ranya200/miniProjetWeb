

document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
        
            var firstName = document.getElementById('fname').value;
            var lastName = document.getElementById('lname').value;
            var caseId = document.getElementById('caseId').value;
            var address = document.getElementById('add').value;
            var country = document.querySelector('select[name="Pays"]').value;
            var phone = document.getElementById('phone').value;
            var dob = document.getElementById('dob').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('pass').value;
            var confirmPassword = document.getElementById('cpass').value;
            var gender = document.querySelector('input[name="genre"]:checked').value;

            console.log('Form Data:', {
                caseId,
                firstName,
                lastName,
                address,
                country,
                phone,
                dob,
                email,
                password,
                confirmPassword,
                gender,
            });

            alert('Form submitted successfully!');
        }
    });
});

function validateForm() {
    var caseId = document.getElementById('caseId').value;
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var phone = document.getElementById('phone').value;

    if (caseId.length < 8) {
        alert('Case ID must contain at least 3 characters.');
        return false;
    }

    if (firstName.length < 3 || lastName.length < 3) {
        alert('Nom et prénom doivent contenir au moins 3 caractères.');
        return false;
    }

    if (phone.length < 8) {
        alert('Numéro de téléphone doit contenir au moins 8 chiffres.');
        return false;
    }

    // Add more validation as needed

    return true; // If all validations pass
}
