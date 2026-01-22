
var correctAnswers = {
    q1: 'c', q2: 'a', q3: 'b', q4: 'c', q5: 'a',
    q6: 'b', q7: 'c', q8: 'a', q9: 'b', q10: 'c'
};

function submitQuiz() {
    var score = 0;
    var totalQuestions = 10;
    
    for (var i = 1; i <= totalQuestions; i++) {
        var questionName = 'q' + i;
        var radios = document.getElementsByName(questionName);
        var userAnswer = '';
        
        for (var j = 0; j < radios.length; j++) {
            if (radios[j].checked) {
                userAnswer = radios[j].value;
                break;
            }
        }
        
        if (userAnswer === correctAnswers[questionName]) {
            score++;
        }
    }
    
    var resultDiv = document.getElementById('quizResult');
    var percentage = (score / totalQuestions) * 100;
    
    resultDiv.innerHTML = '<h3>Résultat : ' + score + '/10</h3>' +
                         '<p>' + percentage.toFixed(0) + '% de bonnes réponses</p>' +
                         '<button onclick="showCorrect()">Voir les bonnes réponses</button>';
    resultDiv.style.display = 'block';
}

function showCorrect() {
    for (var q in correctAnswers) {
        var correctValue = correctAnswers[q];
        var correctInput = document.querySelector('input[name="' + q + '"][value="' + correctValue + '"]');
        if (correctInput) {
            correctInput.parentElement.style.backgroundColor = 'lightgreen';
        }
    }

    var resultDiv = document.getElementById('quizResult');
    var listHtml = '<h4>Liste des bonnes réponses :</h4><ul style="text-align:left">';
    for (var i = 1; i <= 10; i++) {
        var qName = 'q' + i;
        listHtml += '<li>Question ' + i + ' : ' + correctAnswers[qName].toUpperCase() + '</li>';
    }
    listHtml += '</ul>';
    resultDiv.innerHTML += listHtml;
}

function resetQuiz() {
    var form = document.getElementById('quizForm');
    var resultDiv = document.getElementById('quizResult');
    
    form.reset();
    resultDiv.style.display = 'none';
    
    var labels = document.getElementsByTagName('label');
    for (var i = 0; i < labels.length; i++) {
        labels[i].style.backgroundColor = '';
    }
}