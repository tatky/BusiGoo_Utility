if(!document.getElementById('scheduler_select_schedule_type_button_clone')){
  var bbtnClone = document.getElementById('scheduler_select_schedule_type_button').cloneNode(true);
  bbtnClone.id='scheduler_select_schedule_type_button_clone';
 document.getElementById('schedule_title').parentElement.parentElement.appendChild(bbtnClone);
}
