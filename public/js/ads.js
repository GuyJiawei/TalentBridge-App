// const formattedDate = moment(job.posted_date.format('YYYY-MM-DD HH:mm:ss'));

$('.apply')
.on('click', function(e){
  //document.querySelector('#myToast').toast("show");
  const id= e.target.getAttribute("data-jobsid")
  console.log("jobid", id)
  // fetch with method POST
  fetch('/api/applied', {
    method: 'POST',
    data: JSON.stringify({
        jobs_id: id
    })
  }).then(() => {
    //show notification
    $.notify("Applied successfully!", "success");
  })
});