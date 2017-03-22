// data reducer
export default function data(state = {}, action) {
  switch (action.type) {

    //Saves the retirieved data in state
    case 'SAVE_DATA':
      return {
        "questions" : action.questions,
        "answers" : action.answers,
        "result" : []
      };

      //Handles the updates to state for on change of select elements
      case 'UPDATE_VALUE':
        var new_state = JSON.parse(JSON.stringify(state));
        new_state.questions.map(function(question){
          if(Number(question.id) === Number(action.id)){
              question.value = action.value;
          }
        });
        return new_state;
        break;

        // Calculate the result, Validate and manage the result state
        case 'CALCULATE_RESULT':
        var new_state = JSON.parse(JSON.stringify(state));
        new_state.result = [
          {text: 'Correct', value: 0},
          {text: 'Incorrect', value: 0}
        ];
        new_state.hasError = false;
        
        new_state.questions.map(function(question,index){
          if(Number(question.id) === Number(new_state.answers[index].questionId)){
              
              if(!question.value){
                question.errorText = "This field is required";
                new_state.hasError = true;
              }else{
                question.errorText = null;
              }
              if(!new_state.hasError){
                if(Number(question.value) === Number(new_state.answers[index].answerId)){
                  new_state.result[0].value++;
                }else{
                  new_state.result[1].value++;
                  question.errorText = "Incorrect Answer";
                }
              }
            }
        })
          if(new_state.hasError){
            new_state.result=[];
          }
        ;
        return new_state;
        break;

    // initial state
    default:
    console.log("default reducer triggerd");
    return state;
  }
}