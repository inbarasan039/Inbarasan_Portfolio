
document.addEventListener('DOMContentLoaded',()=>{
 const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('inview');obs.unobserve(e.target);}});
 },{threshold:0.2});
 document.querySelectorAll('.skill-card,.educ-card').forEach(el=>obs.observe(el));
});
