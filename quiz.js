const QuizData = [
    {
    Question: "Which Language Runs In A Web Browser?",
    A: "Java",
    B: "C",
    C: "Python",
    D: "JavaScript",
    Correct: "D",
    },
    {
    Question: "What Does CSS Stand For?",
    A: "Central Style Sheets",
    B: "Cascading Style Sheets",
    C: "Cascading Simple Sheets",
    D: "Cars SUVs Sailboats",
    Correct: "B",
    },
    {
    Question: "What Does HTML Stand For?",
    A: "Hypertext Markup Language",
    B: "Hypertext Markdown Language",
    C: "Hyperloop Machine Language",
    D: "Helicopters Terminals Motorboats Lamborginis",
    Correct: "A",
    },
    {
    Question: "What Year Was JavaScript Launched?",
    A: "1996",
    B: "1995",
    C: "1994",
    D: "None Of The Above",
    Correct: "B",
    },
    ];


    //-----------------------------------------------------------------

    //getting access of HTML document elements
    const quiz = document.getElementById("box");
    const quest = document.getElementById("quest");
    const ans = document.querySelectorAll(".options");
    const a_label = document.getElementById("1");
    const b_label = document.getElementById("2");
    const c_label = document.getElementById("3");
    const d_label = document.getElementById("4");
    const sub = document.getElementById("sub");

    //-----------------------------------------------------------------

    //initializing variables
    let index = 0;
    let correct = 0;
    let incorrect = 0;
    len = QuizData.length;

    //-------------------------------------------------------------------

    //submitt() function includes getAnswer() and loadQuestion()

    submitt = () => {

        const now = QuizData[index];
        const selecte = getAnswer()
        if(selecte === now.Correct) {
            
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }

    //---------------------------------------------------------------------


    //loadQuestion() defined: includes endofQuiz() and reset()
    const loadQuestion = () => {

        if (index === len) {
            //const abhi = document.getElementById("sub");
           // abhi.onclick = addElement;
            return addElement();

        }
        reset()
        const data = QuizData[index]
        quest.innerHTML = `${index +1})${data.Question}`;
        ans[0].nextElementSibling.innerHTML = data.A;
        ans[1].nextElementSibling.innerHTML = data.B;
        ans[2].nextElementSibling.innerHTML = data.C;
        ans[3].nextElementSibling.innerHTML = data.D;
    }

    //-----------------------------------------------------------------

    //getAnswer() defined:
    const getAnswer = () => {
        let selected;
        ans.forEach(
            (inputEl) => {
                if(inputEl.checked) {
                    selected = inputEl.value;
                }
            }
        )
        return selected;
    }

    //--------------------------------------------------------------------

    //reset() defined:
    const reset = () => {
        ans.forEach(
            (inputEl) => {
                inputEl.checked = false;
            }
        )
    }

    

    //--------------------------------------------------------------------

    //endofQuiz() defined:
    const endofQuiz = () => {


        quiz.innerHTML = `
        <div id="endmsg">
        You have scored ${correct} out of ${len}!
        </div>
        
        `
    }


    const addElement = () => { 
        endofQuiz();
        const newBtn = document.createElement("button");
       newBtn.innerText = "Restsrt Quiz";
       quiz.appendChild(newBtn);
       //index = 0;
       newBtn.setAttribute("id", "newbt");
       const g = document.getElementById("newbt");
       if(index===4) {
        index = 5;
       }
       g.onclick = console.log(index);
       
        

    }

    loadQuestion(index);
   