$(document).ready(function()
{

    function addStudentDiv(item, parentDiv)
    {
        var rowDiv = document.createElement('div');
        var imgCol = document.createElement('div');
        var nameCol = document.createElement('div');
        
        var img = document.createElement('img');
        var nameHeading = document.createElement('h4');
        var IDnum = document.createElement('p');

        $(rowDiv).addClass('row student');
        $(imgCol).addClass('col-sm-2 center');
        $(nameCol).addClass('col-sm-10');
        $(img).attr('src', item.img);
        $(nameHeading).text(item.name);
        $(IDnum).text(item.id);

        imgCol.append(img);
        nameCol.append(nameHeading);
        nameCol.append(IDnum);
        rowDiv.append(imgCol);
        rowDiv.append(nameCol);

        parentDiv.append(rowDiv);
    }

    $.get('getStudents', function(data,status)
    {
        console.log(data);

        var studentListContainer = $('#studentList');
        data.forEach((item,i)=>
        {
            addStudentDiv(item, studentListContainer);
        });
    });

    //Post call

    $('#addStudent').click(function()
    {
        var name = $('#name').val();
        var IDnum = $('#idnum').val();

        var gender = $("input[name='gender']:checked").val();

        var newStudent = 
        {
            name: name,
            id: IDnum,
            gender: gender
        };

        $.post('addStudent', newStudent, function(data,status)
        {
            var studentListContainer = $('#studentList');
            addStudentDiv(data, studentListContainer);
        });
    });
});
