import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";

class JobsService {
  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter((job) => job.id != id);
  }

  createJob(newJob) {
    let job = new Job(
      newJob.title,
      newJob.company,
      newjob.description,
      newJob.rate,
      newJob.hours
    );
    console.log(job);
    ProxyState.jobs = [...ProxyState.jobs, job];
  }
}

export const jobsService = new JobsService();
