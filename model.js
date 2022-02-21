const Task = {
    id: 0,
    name: '',
    description: '',
    priority: '', // low, medium, high
    status: '' // none, started, completed
};

const ServiceResult = {
    status: "",
    method: "",
    data: null,
    message: ""
};

module.exports = {Task, ServiceResult};