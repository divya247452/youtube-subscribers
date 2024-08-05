document.getElementById('subscriberId').addEventListener('change', async (event)=>{
    event.preventDefault();
    let id = await event.target.value;
   let link = document.getElementById('fetchSubscriberById')
   link.href = `/api/subscribers/${id}`
})