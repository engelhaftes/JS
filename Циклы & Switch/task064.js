function getStatusDesc(status) {
    switch (status) {
        case 200: return "OK";
        case 404: return "Not Found";
        case 500: return "Server Error";
        default: return "Unknown";
    }
}
console.log(getStatusDesc(404)); 
