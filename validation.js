$(function(){

    $('#changetabbutton1').click(function(e){

      var flag = 0;
      
      var mobileNumber = document.getElementById('mobile_number');
      var poc = document.getElementById('poc').value;
      var sponsor = document.getElementById('sponsor').value;
      var name = document.getElementById('name').value;
      var f_name = document.getElementById('father_name').value;
      var m_name = document.getElementById('mother_name').value;
     
      var sex = document.getElementById('sex');
      var dob = document.getElementById('dob');
      var age = document.getElementById('age');
      var religion = document.getElementById('religion');
      var caste = document.getElementById('caste');
      var nationality = document.getElementById('nationality');
      
      console.log('poc'+ document.getElementById('poc').value);

      if(document.getElementById('email').value == ''){
        document.getElementById('religion').focus();
        document.getElementById('e_email').innerHTML = "Email is required";
        document.getElementById('e_email').style.color = 'red';
        flag = 1;
      }

      if(document.getElementById('pincode').value == ''){
        document.getElementById('pincode').focus();
        document.getElementById('e_pincode').innerHTML = "pincode is required";
        document.getElementById('e_pincode').style.color = 'red';
        flag = 1;
      }

      if(document.getElementById('address').value == ''){
        document.getElementById('address').focus();
        document.getElementById('e_address').innerHTML = "address is required";
        document.getElementById('e_address').style.color = 'red';
        flag = 1;
      }

      if(document.getElementById('nationality').value == ''){
        document.getElementById('nationality').focus();
        document.getElementById('e_nationality').innerHTML = "nationality is required";
        document.getElementById('e_address').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('caste').value == ''){
        document.getElementById('caste').focus();
        document.getElementById('e_caste').innerHTML = "caste is required";
        document.getElementById('e_caste').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('religion').value == ''){
        document.getElementById('religion').focus();
        document.getElementById('e_religion').innerHTML = "Enter religion";
        document.getElementById('e_religion').style.color = 'red';
        flag = 1;
      }

      if(document.getElementById('age').value == ''){
        document.getElementById('age').focus();
        document.getElementById('e_age').innerHTML = "Enter age";
        document.getElementById('e_age').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('dob').value == ''){
        document.getElementById('dob').focus();
        document.getElementById('e_dob').innerHTML = "Enter D.O.B";
        document.getElementById('e_dob').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('sex').value == ''){
        document.getElementById('sex').focus();
        document.getElementById('e_sex').innerHTML = "Choose Gender";
        document.getElementById('e_sex').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('father_name').value == ''){
        document.getElementById('father_name').focus();
        document.getElementById('e_father').innerHTML = "Enter Father's Name";
        document.getElementById('e_father').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('name').value == ''){
        document.getElementById('name').focus();
        document.getElementById('e_name').innerHTML = "Enter name is required";
        document.getElementById('e_name').style.color = 'red';
        flag = 1;
      }
      if(document.getElementById('poc').value == 'Choose...'){

        document.getElementById('poc').focus();
        document.getElementById('e_poc').innerHTML = "Choose an Option";
        document.getElementById('e_poc').style.color = 'red';

      }

      if(flag ==0)
       $('#mytabs a[href="#academic"]').tab('show');
    });

    $('#changetabbutton2').click(function(e){
        
        $('#mytabs a[href="#professional"]').tab('show');
    });

    $('#changetabbutton3').click(function(e){
        e.preventDefault();
        
        $('#mytabs a[href="#upload"]').tab('show');
    });

    $('#changetabbutton4').click(function(e){
        e.preventDefault();
         

        $('#mytabs a[href="#declaration"]').tab('show');
    });

    
    $('#changetabbutton5').click(function(e){
      e.preventDefault();

      $('#mytabs a[href="#personal"]').tab('show');
  });

  $('#changetabbutton6').click(function(e){
      e.preventDefault();

      $('#mytabs a[href="#academic"]').tab('show');
  });

});


function ValidateSize(file) {
    var FileSize = file.files[0].size / 1024 / 1024; // in MB
    if (FileSize > 2) {
        alert('File size exceeds 2 MB');
       // $(file).val(''); //for clearing with Jquery
    } else {

    }
}
