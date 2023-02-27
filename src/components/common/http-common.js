import axios from "axios";

export default axios.create({
  baseURL: "http://dev-cok-alb-submission-01-1655548216.us-east-1.elb.amazonaws.com/submission-svc",
  headers: {
    "Content-type": "application/json"
  }
});