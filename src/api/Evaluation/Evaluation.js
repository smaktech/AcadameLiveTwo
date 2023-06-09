
import { apiUrl } from '../../config';
import { objToQueryString } from '../../config'

//Fetch all course data using offset and limit!
async function getAllEvaluation() {
    try{
        const queryString = objToQueryString({
            // page: page,
            // limit: limit,
    
        })
        var apiLink;
    
        apiLink = apiUrl + '/evaluation/getevaluationlist'
        console.log("Request from getEvaluation to", apiLink);
        
        const data = await fetch(apiLink, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            
        }).then((res) => res.json());
    
        // const numAscending = [...data].sort((a, b) => b.course - a.course);
        //  data = [].concat(this.state.data)
        // .sort((a, b) => a.board > b.board ? 1 : -1)
    //    data= data.sort((a,b) => (a.board > b.board) ? 1 : ((b.board > a.board) ? -1 : 0))
        // data.sort(function(a, b){
        //     if(a.board < b.board) { return -1; }
        //     if(a.board > b.board) { return 1; }
        //     return 0;
        // })
      
    //    data('board').sort((a, b) => b-a)
        return data;
    }
  catch(error){
    alert(error);
  }

}

async function getEvaluationID(id) {
    try{
    console.log('getEvaluationID');

    var apiLink;
    
        apiLink = apiUrl + '/evaluation/getEvaluationID?id='+ id
   
        console.log( id, 'getEvaluationID ' )

    const data = await fetch(apiLink,  {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },

    }).then((res) => res.json());

    

   console.log('Get getEvaluationID', data)
    return data;
}
catch(error){
alert(error);
}
}

//api function for update a course 

async function editEvaluation(course, name, board, subBoard, classes, subject, description, status, courseImage) {
    try{

    
    // var details = {
    //     "name": name,
    //     "description": description,
    //     "board": board,
    //     "classes": classes,
    //     "subject": subject,
    //     "topic": topic,
    //     // "coursePicture": coursePicture,
    //     'status':status
    // };

    // var formBody = [];
    // for (var property in details) {
    //     var encodedKey = encodeURIComponent(property);
    //     var encodedValue = encodeURIComponent(details[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    const formData = new FormData();
    formData.append("name", name)
    formData.append("board", board)
    if (subBoardID) {
        formData.append("subBoard", subBoard)
    }
    formData.append("classes", classes)
    formData.append("subject", subject)
    // formData.append("topicIDs", topicIDs)
    formData.append("description", description)
    formData.append("status", status)
    formData.append("image", courseImage)
    const data = await fetch(apiUrl + '/evaluation/editEvaluation/' + e, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/json',
            // 'Content-Type': 'multipart/form-data',
        },
        // body: JSON.stringify({ name, subBoardID, boardID, classesID, subjectID, description, status }),
        body: formData
    }).then((res) => res.json());
    // console.log("description")
    return data;
}
catch(error)
{
    alert(error);
}

}

//api function for adding a course 
async function createEvaluation( board, qualification, subject, description, course) {
try{
    //////////////////////////////
    var details = {
        "board": board,
        "qualification": qualification,
        "subject": subject,
        "description": description,
        "course": course,
       
    };


   
    //   console.log(details);
    var formBody = [];
    //   console.log('API url check ',apiUrl)
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    const data = await fetch(apiUrl + '/evaluation/createEvaluation', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
    }).then((res) => res.json());
    
   
  
    console.log('client data console',data);
    return data;
    
}
catch(error){
    alert(error);
}


}

//api to delete the course from the database
async function deleteEvaluation(course) {
try{
    const data = await fetch(apiUrl + '/evaluation/deleteEvaluationById/' + course, {

        method: 'POST',
        headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
    console.log('courseID server check', deleteEvaluation)
    return data;
}
catch(error){
    alert(error);
}
}

//api to get the details of a particular topic by sending the courdseId
async function getEvaluationById(evaluation) {
    try{
    const data = await fetch(apiUrl + '/evaluation/getEvaluationById/' + evaluation, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
    return data;}
    catch(error){
        alert(error);
    }
}




async function getEvaluationByFilter(searchString, startDate, endDate, sortByDate, status, board, subject) {
    try{
    let obj = {
        board: board,
        subject: subject,
        searchString: searchString,
        startDate: startDate,
        endDate: endDate,
        sortByDate: sortByDate,
        status: status
    }
    const queryString = objToQueryString(obj)
    var apiLink;
    if (queryString == null) {
        apiLink = apiUrl + '/course/filterEvaluation'
    }
    else {
        apiLink = apiUrl + '/course/filterEvaluation?' + queryString
    }

    console.log("test call back", queryString, obj)
    const data = await fetch(apiLink, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            // 'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
    return data;
}
catch(error){
    alert(error);
}

}

//api to get all courses of user
async function getAllUserEvaluations(userID) {
    try{
    const data = await fetch(apiUrl + '/userEvaluation/getAllUserEvaluations/' + userID, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
    return data;
}
catch(error){
    alert(error);
}
}

export { getAllEvaluation,getEvaluationID, editEvaluation, deleteEvaluation, getEvaluationByFilter, getEvaluationById, getAllUserEvaluations, createEvaluation }