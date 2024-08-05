document.addEventListener('DOMContentLoaded', function() {
    var getResult = localStorage.getItem('getResult');
    var dietCalories = localStorage.getItem('dietCalories');

    console.log("GET Result:", getResult); // Debug log
    console.log("Diet Calories:", dietCalories); // Debug log

    if (getResult && dietCalories) {
        document.getElementById('get-result').textContent = getResult;
        document.getElementById('diet-calories').textContent = dietCalories + " kcal";
        document.getElementById('diet-image').src = 'assets/images/MUDE-' + dietCalories + 'kcal.jpg';

        var purchaseButton = document.getElementById('purchase-button');
        switch (dietCalories) {
            case '1200':
                purchaseButton.href = 'https://pay.hotmart.com/J94228920E?checkoutMode=10';
                break;
            case '1300':
                purchaseButton.href = 'https://pay.hotmart.com/E94277222V?checkoutMode=10';
                break;
            case '1400':
                purchaseButton.href = 'https://pay.hotmart.com/S94278980V?checkoutMode=10';
                break;
            case '1500':
                purchaseButton.href = 'https://pay.hotmart.com/X94514490P?checkoutMode=10';
                break;
            case '1600':
                purchaseButton.href = 'https://pay.hotmart.com/L94514697U?checkoutMode=10';
                break;
            case '1700':
                purchaseButton.href = 'https://pay.hotmart.com/K94514843P?checkoutMode=10';
                break;
            case '1800':
                purchaseButton.href = 'https://pay.hotmart.com/P94531606S?checkoutMode=10';
                break;
            case '1900':
                purchaseButton.href = 'https://pay.hotmart.com/Q94531691C?checkoutMode=10';
                break;
            case '2000':
                purchaseButton.href = 'https://pay.hotmart.com/G94531836C?checkoutMode=10';
                break;
            case '2100':
                purchaseButton.href = 'https://pay.hotmart.com/J94531923W?checkoutMode=10';
                break;
            default:
                purchaseButton.href = '#'; // fallback in case dietCalories is not recognized
        }
    } else {
        alert('Erro ao recuperar os dados. Por favor, tente novamente.');
    }
});
