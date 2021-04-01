import { generateId } from '../Utils/GenerateId.js'

export default class Job {
    constructor(title, company, description, rate, hours) {
        this.id = generateId()
        this.title = title
        this.company = company
        this.description = description 
        this.rate = rate 
        this.hours = hours
    }

    get Template() {
        // add Boostrap Template
        return `
          <div class="col-md-4 mb-3">
                <div class="card shadow">
                    <div class="card-body">
                        <h4 class="card-title">${this.title} | ${this.company}</h4>
                        <p class="card-text">${this.description}</p>
                        <small>${this.rate} | ${this.hours}</small>
                    </div>
                    <div class="px-3 pb-3 d-flex justify-content-between">
                        <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
                        <button type="button" class="btn btn-info">Apply</button>
                    </div>
                </div>
            </div>
        `;
    }
}