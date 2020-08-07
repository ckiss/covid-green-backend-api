const apiKey = 'zQOIBdFR8M0sYuT0njD9ku8oL'; // Socrata API Key.
const axios = require('axios');

/**
 * @class Access New York State and NYC data from Socrata.
 */
class NYSSocrata {
    /**
     * Gets meta information by day about COVID from the NYC source.
     * "COVID-19 Daily Counts of Cases, Hospitalizations, and Deaths"
     * @url https://dev.socrata.com/foundry/data.cityofnewyork.us/rc75-m7u3
     */
    static getNYCDailyCounts() {
        return axios.get(`https://data.cityofnewyork.us/resource/rc75-m7u3.json`, {
            headers: {
                'X-App-Token': apiKey
            }
        });
    }

    /**
     * Gets the state-wide testing data as found on the NY DoH website.
     * "COVID-19 Outcomes by Testing Cohorts: Cases, Hospitalizations, and Deaths"
     * @url https://data.cityofnewyork.us/Health/COVID-19-Outcomes-by-Testing-Cohorts-Cases-Hospita/cwmx-mvra
     * @throws Error if the response from the API is not 200.
     */
    static getNYCOutcomesByTestingCohorts() {
        return axios.get(`https://data.cityofnewyork.us/resource/cwmx-mvra.json`, {
            headers: {
                'X-App-Token': apiKey
            }
        });
    }

    /**
     * Gets the state-wide testing data as found on the NY DoH website.
     * "New York State Statewide COVID-19 Testing"
     * @url https://health.data.ny.gov/Health/New-York-State-Statewide-COVID-19-Testing/xdss-u53e
     * @throws Error if the response from the API is not 200.
     */
    static getStateWideTesting() {
        return axios.get(`https://health.data.ny.gov/resource/xdss-u53e.json`, {
            headers: {
                'X-App-Token': apiKey
            }
        });
    }
}