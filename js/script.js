var users = [
    {
        name: 'Lovelace',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar1.png',
        age: '23'     
    },
    {
        name: 'Pearl',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar2.png',
        age: '24'   
    },
    {
        name: 'Prince',
        gender: 'M',
        hobby: 'music',
        avatar: 'avatar3.png',
        age: '20'
    },
    {
        name: 'Emmanuel',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar4.png',
        age: '21'
    },
    {
        name: 'Clancy',
        gender: 'F',
        hobby: 'reading',
        avatar: 'avatar5.png',
        age: '27'
    },
    {
        name: 'Ernesto',
        gender: 'M',
        hobby: 'shopping',
        avatar: 'avatar6.png',
        age: '25'
    },
    {
        name: 'Charlie',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar7.png',
        age: '25'
    },
];


window.addEventListener('load', function() {
    
    var results = document.getElementById('results');
    
    function search() {
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        
        var resultsHtml = '';
        var usersLength = users.length;

        for(var i = 0; i < usersLength; i++) {
            //check gender
            if (gender == 'A' || gender == users[i].gender) {
                //check hobby
                if (hobby == '' || hobby == users[i].hobby) {
                    resultsHtml += '<div class="person-row">\
                           <img src="images/' + users[i].avatar + '" />\
                           <div class="person-info">\
                           <div>' + users[i].name + '</div>\
                           <div>' + users[i].hobby + '</div>\</div>\
                            <button>Add as friend</button></div>';  
                }
            }
        }
        
        results.innerHTML = resultsHtml;
    }
    
    var searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', search);
});