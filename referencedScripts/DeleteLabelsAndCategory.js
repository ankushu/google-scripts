/**
 * This is a simple script for quick clean up without any email reminders or error handling.
 * This is copied from stackoverflow
 */
function auto_delete_email() {
  delete_Label ("Cameras",30);
  delete_Label ("Travel",365);
  delete_Category ("Social",90);
  delete_Category ("Finance",365*3);
  delete_Category ("Forums",90);
  delete_Category ("Promos",365*3);
}

function delete_Label(mailLabel, delayDays) {
  var label = GmailApp.getUserLabelByName(mailLabel);
  if (!label) { return false; }
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - delayDays);
  var threads = label.getThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate() < maxDate) {
      threads[i].moveToTrash();
    }
  }
}

function delete_Category(mailCategory,delayDays) {  
  var maxDate = new Date(); 
  maxDate.setDate(maxDate.getDate()-delayDays);    
  var threads = GmailApp.search('category:' + mailCategory);
  for (var i = 0; i < threads.length; i++) {  
    if (threads[i].getLastMessageDate()<maxDate){  
      threads[i].moveToTrash();
    } 
  } 
}