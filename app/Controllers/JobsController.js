import { ProxyState } from '../AppState.js';
import { jobsService } from '../Services/JobsService.js'

function _draw() {
    let jobs = ProxyState.jobs;
    let template = '';
    jobs.forEach(job => {
        
        template += job.Template;
    })
    document.getElementById('jobs').innerHTML = template;
}

export default class JobsController {
    constructor() {
        ProxyState.on('jobs', _draw);

        _draw();
    }

    createJob() {
      window.event.preventDefault();

      const form = window.event.target;
      console.log(form.title.value);
     
      let newJob = {
        title: form.title.value,
        company: form.company.value,
        description: form.description.value,
        rate: form.rate.value,
        hours: form.hours.value,
      };

      jobsService.createJob(newJob);

      form.reset();
      $("#new-job-form").modal("hide");

    }

    deleteJob(id) {
        jobsService.deleteJob(id);
    }
}