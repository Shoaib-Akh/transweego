var hostname = window.location.hostname;
export const BASE_URL = hostname.includes("localhost") ? "http://54.157.229.132:5000/api/v1/" : "/api/v1/";