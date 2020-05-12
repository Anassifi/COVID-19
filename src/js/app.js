const Question = [
    `<p class="form__question"> Pensez-vous avoir ou avoir eu de la fièvre ces 10 derniers jours (frissons, sueurs) ? </p>
    <div class="answer-inputs">
     <div>
      <input type="radio" name="Q1" id="Oui" value ="Oui">
      <label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"><span>Oui</span></label>
     </div>
     <div>
     <input type="radio" name="Q1" id="Non" value="Non">
     <label for="Non"> <img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label>
     </div>
    </div>`,
    '<p class="form__question--c">Quelle est votre température corporelle ?</p> <div class="answer-inputs"><input type="number" name="Q2" id="degrés" min="34" max="42" placeholder="34 - 42"><span class="input-span">degrés</span></div>',
    '<p class="form__question"> Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question"> Avez-vous eu des courbatures inhabituelles au cours des derniers jours ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question"> Ces derniers jours, avez-vous un mal de gorge ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question"> Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles. </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Ces derniers jours, avez-vous une fatigue inhabituelle qui vous a obligé à vous reposer plus de la moitié de la journée ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question"> Dans les dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question--quatre">Actuellement, comment vous vous sentez ? </p><div class="answer-inputs"><div> <input type="radio" name="Q10" value="Bien" id="Bien"><label for="Bien"><span>Bien</span> </label> </div><div><input type="radio" name="Q10" value="Assez bien" id="Assez bien"><label for="Assez bien"><span>Assez bien</span> </label> </div> <div> <input type="radio" name="Q10" value="Fatigué(e)" id="Fatigué(e)">  <label for="Fatigué(e)">  <span>Fatigué(e)</span> </label>    </div>    <div>        <input type="radio" name="Q10" value="Très fatigué" id="Très fatigué">      <label for="Très fatigué">      <span>Très fatigué</span> </label>  </div></div>',
    '<p class="form__question--age">Quel est votre âge ? Ceci, afin de calculer un facteur de risque spécifique.</p><div  class="answer-inputs""> <input type="number" id="reponce1" placeholder="17 - 120" min="17" max="120"><span class="input-span">Age</span></div><br><br></br>',
    '<p class="form__question--poids">Quel est votre poids ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p><div  class="answer-inputs""><input type="number" id="reponce1"  min="30" max= "200" placeholder="30 - 200"><span class="input-span">Kg</span></div><br><br></br>',
    '<p class="form__question--taille">Quelle est votre taille ? Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.</p> <div  class="answer-inputs""><input type="number" id="reponce1" min="100" max="260" placeholder="100 - 260"><span class="input-span">Cm</span></div><br><br></br>',
    '<p class="form__question"> Avez-vous de l’hypertension artérielle mal équilibrée ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? </p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Êtes-vous diabétique ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Avez-vous ou avez-vous eu un cancer ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Avez-vous une insuffisance rénale chronique dialysée ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    '<p class="form__question">Avez-vous une maladie chronique du foie ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    ' <p class="form__question--trois">Êtes-vous enceinte ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div><div><input type="radio" name="Q1" id="Homme" value ="Homme"><label for="Homme"><span>Homme</span> </label></div></div>',
    '<p class="form__question">Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
    ' <p class="form__question">Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).</p><div class="answer-inputs"><div><input type="radio" name="Q1" id="Oui" value ="Oui"><label for="Oui"> <img src="/Design/Assets/svg/Oui.svg" alt="" width="30px"> <span>Oui</span> </label></div><div><input type="radio" name="Q1" id="Non" value="Non"><label for="Non"><img src="/Design/Assets/svg/Non.svg" alt="" width="30px"><span>Non</span> </label></div></div>',
  ];
  
  /* Algorithm */
  const textFinal = [
    `nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.`,
    `téléconsultation ou médecin généraliste ou visite à domicile`,
    `appel 141`,
    `“appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent.”`,
    `Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.`,
    `Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.`,
    `Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.`
  ];
  
  
  let sympData = [];
  let fPronosData = [];
  let gravDataMin = [];
  let gravDataMaj = [];
  
  let SympCount = 0;
  let fPronosCount = 0;
  let graveMinCount = 0;
  let graveMajCount = 0;
  
  gatherData = () => {
    for(let i = 0; i < responses.length; i++){
        if(i == 1){
            gravDataMin.push(responses[i]);
            gravDataMaj.push(responses[i]);
        }else if(i >= 0 && i <= 9) {
            sympData.push(responses[i]);
        }else if(i >= 11 && i <= 21){
            fPronosData.push(responses[i]);
        }
        if(i == 7 || i == 8){
            gravDataMaj.push(responses[i]);
        }else if(i == 6 || i == 9){
            gravDataMin.push(responses[i]);
        }
    }
  
  }
  
  plusCounter = () => {
    for(let i = 0; i < sympData.length; i++){
        if(sympData[i] == 'Oui'){
            SympCount++;
        }
    }
    for(let i = 0; i < fPronosData.length; i++){
        if(fPronosData[i] >= 70 && fPronosData[i] < 99 || fPronosData[i] == 'Oui'){ // < 15 ans?
            fPronosCount++;
        }
    }
    for(let i = 0; i < gravDataMin.length; i++){
        if(gravDataMin[i] >= 39 || gravDataMin[i] == 'Oui' || gravDataMin[i] == 'Fatigué(e)' || gravDataMin[i] == 'Très fatigué'){
            graveMinCount++;
        }
    }
    for(let i = 0; i < gravDataMaj.length; i++){
        if(gravDataMaj[i] <= 35.4 || gravDataMaj[i] == 'Oui'){
            graveMajCount++;
        }
    }
    
  }
  
  // results 0 > 21 [], symp 0 to 9, pronos 11 to 21. // age quest index 10 /* indexes - fiever = Index 0 - toux = index 2 - courbatures = index 3 - mal de gorge = index 4 - diarrhee = index 5 */
  
  const resultsText = document.querySelector('.results__text');
  
  algorithms = () => {
    if(responses[0] == 'Oui' ||(responses[2] == 'Oui' && responses[4] == 'Oui') ||
  (responses[2] == 'Oui' && responses[3] == 'Oui') || (responses[0] == 'Oui' && responses[5] == 'Oui')){
    if(fPronosCount == 0 ){
        if(graveMinCount == 0 && graveMajCount == 0 && responses[10] < 50){
            resultsText.textContent = textFinal[0];
            resultsText.style.color = '#F4CF1B';
        } else if(
            ((graveMinCount == 0 && graveMajCount == 0) && 
            (responses[10] >= 50 && responses[10] < 69) || graveMinCount >= 1)){
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        }
    } else if(fPronosCount >= 1){
        if(graveMinCount == 0 && graveMajCount == 0){
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        } else if(graveMinCount == 1){ // bug fixed
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        } else if(graveMinCount >= 2){ // assuming none of the above is true
            resultsText.textContent = textFinal[2];
            resultsText.style.color = '#d63031';
            // added fontsize for red results
            resultsText.style.fontSize = '4rem';
        } // + index 3 for all textFinal[1]
    } else if((fPronosCount == 0 || fPronosCount >= 1) && graveMajCount >= 1){
        resultsText.textContent = textFinal[2];
        resultsText.style.color = '#d63031';
        resultsText.style.fontSize = '4rem';
    }
  } else if(responses[0] == 'Oui' && responses[2] == 'Oui'){
    if(fPronosCount == 0){
        if((graveMajCount == 0 && graveMinCount == 0) || 
        (graveMajCount == 0 && graveMinCount > 1)){
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        }
  
    } else if(fPronosCount >= 1){
        if(graveMajCount == 0 && graveMinCount == 0){
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        } else if(graveMinCount == 1){
            resultsText.textContent = `${textFinal[1]}, ${textFinal[3]}`;
            resultsText.style.color = '#F4CF1B';
        } else{ //more than 1 MinGravite
            resultsText.textContent = textFinal[2];
            resultsText.style.color = '#d63031';
            resultsText.style.fontSize = '4rem';
        }
  
    } else if((fPronosCount == 0 || fPronosCount >= 1) && graveMajCount >= 1){
        resultsText.textContent = textFinal[2];
        resultsText.style.color = '#d63031';
        resultsText.style.fontSize = '4rem';
    }
  
  } else if(responses[0] == 'Oui' || responses[2] == 'Oui' ||
            responses[4] == 'Oui' || responses[3] == 'Oui'){
                if(graveMajCount == 0 && graveMinCount == 0){
                    resultsText.textContent = textFinal[4];
                    resultsText.style.color = '#026534';
                    
                } else if (graveMajCount == 1 || graveMinCount == 1 || fPronosCount == 1){
                    resultsText.textContent = textFinal[5];
                    resultsText.style.color = '#026534';
  
                }
  
  } else if(responses[0] == 'Non' && responses[2] == 'Non' && responses[3] == 'Non' && responses[4] == 'Non' && responses[5] == 'Non'){
    resultsText.textContent = textFinal[6];
    resultsText.style.color = '#026534';
  }
  
  }

  /* Variables */
  const currQuest = document.querySelector('.question');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.previous');
  const sTest = document.querySelector('.start-test');
  const result = document.querySelector('.result');
  const restart = document.querySelector('.results__btn');
  let section = document.querySelectorAll('.section');
  let progessBar = document.querySelectorAll('.progressbar li');
  let progBar = Array.from(progessBar);
  let pro = document.querySelector('.prog progress');
  let proNumber = document.querySelector('.Qnumber');
  let move = pro.value;
  let counter = 0;
  var responses = [];
  
  /* testing */
  console.log();
  
  /* get the user answer */
  
  getInput = (e) => {
    for(let i = 0; i < input.length; i++){
      input[i].addEventListener('change', () => {
        if(input.length === 1){
          responses.splice(e, 1, input[i].value);
          next.removeAttribute('disabled');
          next.style.setProperty('cursor','pointer');
        } else {
          if(input[i].checked == true){
            responses.splice(e, 1, input[i].value);
            next.removeAttribute('disabled');
            next.style.setProperty('cursor','pointer');
          }
        }
      });
    }
  };
  
  /* Start button */
  sTest.addEventListener('click', e => {
    e.preventDefault();
    section[1].classList.remove('disappear');
    section[0].classList.add('disappear');
    section[2].classList.add('disappear');
    /* move stepper */
    progBar[0].classList.remove('active');
    progBar[1].classList.add('active');
    prev.classList.add('disappear');
    next.setAttribute('disabled','disabled');
    next.style.setProperty('cursor','not-allowed');
    currQuest.innerHTML = Question[counter];
    input = document.querySelectorAll('.answer-inputs input');
    getInput(counter);
  });
  
  /* Next button */
  next.addEventListener('click', e => {
    e.preventDefault();
    if(counter < Question.length - 1){
      counter++;
      prev.classList.remove('disappear');
      /* move progressbar */
      move++;
      pro.attributes[1].value = move;
      proNumber.innerHTML = move;
    }
    if(counter == Question.length - 1){
      result.classList.remove('disappear');
      next.classList.add('disappear');
    }
    currQuest.innerHTML = Question[counter];
    next.setAttribute('disabled','disabled');
    next.style.setProperty('cursor','not-allowed');
    input = document.querySelectorAll('.answer-inputs input');
    getInput(counter);
  });
  
  /* Previous button */
  prev.addEventListener('click', e => {
    e.preventDefault();
    if(counter > 0){
      counter--;
      move--;
      pro.attributes[1].value = move;
      proNumber.innerHTML = move;
    }
    if(counter == 0){
      prev.classList.add('disappear');
    }
    if(counter < Question.length -1){
      result.classList.add('disappear');
      next.classList.remove('disappear');
      
    }
    currQuest.innerHTML = Question[counter];
    input = document.querySelectorAll('.answer-inputs input');
    getInput(counter);
  });
  
  /* Results button */
  result.addEventListener('click', e => {
    e.preventDefault();
    gatherData();
    plusCounter();
    algorithms();
    section[0].classList.add('disappear');
    section[1].classList.add('disappear');
    section[2].classList.remove('disappear');
    progBar[1].classList.remove('active');
    progBar[2].classList.add('active');
  });
  
  restart.addEventListener('click', e => {
    e.preventDefault();
    sympData = [];
    fPronosData = [];
    gravDataMin = [];
    gravDataMaj = [];
    SympCount = 0;
    fPronosCount = 0;
    graveMinCount = 0;
    graveMajCount = 0;
    counter = 0;
    move = 1;
    pro.attributes[1].value = 1;
    proNumber.innerHTML = 1;
    section[2].classList.add('disappear');
    section[0].classList.remove('disappear');
    progBar[2].classList.remove('active');
    progBar[0].classList.add('active');
    next.classList.remove('disappear');
    prev.classList.add('disappear');
    result.classList.add('disappear');
    currQuest.innerHTML = Question[counter];
    input = document.querySelectorAll('.answer-inputs input');
    getInput(counter);
  });
  